import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, BibleStudy, Lesson, uploadImage } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Loader2, Pencil, Trash2, Plus, Save, X, Upload, BookOpen, Book, GripVertical } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/PageLayout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function AdminBibleStudies() {
  const [studies, setStudies] = useState<BibleStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [isStudyDialogOpen, setIsStudyDialogOpen] = useState(false);
  const [isLessonDialogOpen, setIsLessonDialogOpen] = useState(false);
  const [isDeleteStudyDialogOpen, setIsDeleteStudyDialogOpen] = useState(false);
  const [isDeleteLessonDialogOpen, setIsDeleteLessonDialogOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<BibleStudy | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [studyFormData, setStudyFormData] = useState<BibleStudy>({
    title: "",
    description: "",
    image: "",
    instructor: "",
    whatsapp: "",
    lessons: []
  });
  const [lessonFormData, setLessonFormData] = useState<Lesson>({
    study_id: 0,
    title: "",
    description: "",
    order: 0
  });
  const [formLoading, setFormLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("estudos");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Autenticação simples para a página de administração
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_authenticated");
    if (!isAuthenticated) {
      const password = prompt("Digite a senha de administrador:");
      if (password !== "admin123") { // Senha temporária para exemplo
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão para acessar esta página.",
          variant: "destructive"
        });
        navigate("/");
      } else {
        localStorage.setItem("admin_authenticated", "true");
      }
    }
  }, [navigate, toast]);

  // Carregar estudos do Supabase
  useEffect(() => {
    fetchStudies();
  }, []);

  async function fetchStudies() {
    try {
      setLoading(true);
      
      // Buscar todos os estudos
      const { data: studiesData, error: studiesError } = await supabase
        .from('bible_studies')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (studiesError) throw studiesError;
      
      if (studiesData && studiesData.length > 0) {
        // Para cada estudo, buscar suas lições
        const studiesWithLessons = await Promise.all(
          studiesData.map(async (study) => {
            const { data: lessonsData, error: lessonsError } = await supabase
              .from('lessons')
              .select('*')
              .eq('study_id', study.id)
              .order('order', { ascending: true });
            
            if (lessonsError) throw lessonsError;
            
            return {
              ...study,
              lessons: lessonsData || []
            };
          })
        );
        
        setStudies(studiesWithLessons);
      } else {
        setStudies([]);
      }
    } catch (error) {
      console.error('Erro ao buscar estudos:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os estudos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }

  function handleStudyInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setStudyFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleLessonInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setLessonFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    
    // Criar preview da imagem
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  function openAddStudyDialog() {
    setSelectedStudy(null);
    setStudyFormData({
      title: "",
      description: "",
      image: "",
      instructor: "",
      whatsapp: "",
      lessons: []
    });
    setImageFile(null);
    setImagePreview(null);
    setIsStudyDialogOpen(true);
  }

  function openEditStudyDialog(study: BibleStudy) {
    setSelectedStudy(study);
    setStudyFormData(study);
    setImageFile(null);
    setImagePreview(study.image);
    setIsStudyDialogOpen(true);
  }

  function openDeleteStudyDialog(study: BibleStudy) {
    setSelectedStudy(study);
    setIsDeleteStudyDialogOpen(true);
  }

  function openAddLessonDialog(study: BibleStudy) {
    setSelectedStudy(study);
    setSelectedLesson(null);
    
    // Encontrar a próxima ordem para a nova lição
    const nextOrder = study.lessons?.length ? Math.max(...study.lessons.map(l => l.order)) + 1 : 1;
    
    setLessonFormData({
      study_id: study.id || 0,
      title: "",
      description: "",
      order: nextOrder
    });
    setIsLessonDialogOpen(true);
  }

  function openEditLessonDialog(study: BibleStudy, lesson: Lesson) {
    setSelectedStudy(study);
    setSelectedLesson(lesson);
    setLessonFormData(lesson);
    setIsLessonDialogOpen(true);
  }

  function openDeleteLessonDialog(study: BibleStudy, lesson: Lesson) {
    setSelectedStudy(study);
    setSelectedLesson(lesson);
    setIsDeleteLessonDialogOpen(true);
  }

  async function handleSaveStudy() {
    try {
      setFormLoading(true);
      
      if (!studyFormData.title || !studyFormData.description || !(studyFormData.image || imageFile) || !studyFormData.instructor) {
        toast({
          title: "Erro",
          description: "Preencha todos os campos obrigatórios",
          variant: "destructive"
        });
        return;
      }

      // Se tiver um arquivo selecionado, fazer upload
      let imageUrl = studyFormData.image;
      if (imageFile) {
        setUploadLoading(true);
        imageUrl = await uploadImage(imageFile, 'bible-studies') || '';
        
        if (!imageUrl) {
          toast({
            title: "Erro",
            description: "Erro ao fazer upload da imagem",
            variant: "destructive"
          });
          setUploadLoading(false);
          return;
        }
        setUploadLoading(false);
      }

      const studyData = {
        title: studyFormData.title,
        description: studyFormData.description,
        image: imageUrl,
        instructor: studyFormData.instructor,
        whatsapp: studyFormData.whatsapp
      };

      if (selectedStudy?.id) {
        // Atualizar estudo existente
        const { error } = await supabase
          .from('bible_studies')
          .update(studyData)
          .eq('id', selectedStudy.id);

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Estudo bíblico atualizado com sucesso"
        });
      } else {
        // Adicionar novo estudo
        const { error } = await supabase
          .from('bible_studies')
          .insert(studyData);

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Estudo bíblico adicionado com sucesso"
        });
      }

      setIsStudyDialogOpen(false);
      fetchStudies();
    } catch (error) {
      console.error("Erro ao salvar estudo:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar o estudo",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleSaveLesson() {
    try {
      setFormLoading(true);
      
      if (!lessonFormData.title || !lessonFormData.description) {
        toast({
          title: "Erro",
          description: "Preencha todos os campos",
          variant: "destructive"
        });
        return;
      }

      if (selectedLesson?.id) {
        // Atualizar lição existente
        const { error } = await supabase
          .from('lessons')
          .update({
            title: lessonFormData.title,
            description: lessonFormData.description,
            order: lessonFormData.order
          })
          .eq('id', selectedLesson.id);

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Lição atualizada com sucesso"
        });
      } else {
        // Adicionar nova lição
        const { error } = await supabase
          .from('lessons')
          .insert({
            study_id: lessonFormData.study_id,
            title: lessonFormData.title,
            description: lessonFormData.description,
            order: lessonFormData.order
          });

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Lição adicionada com sucesso"
        });
      }

      setIsLessonDialogOpen(false);
      fetchStudies();
    } catch (error) {
      console.error("Erro ao salvar lição:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar a lição",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDeleteStudy() {
    if (!selectedStudy?.id) return;
    
    try {
      setFormLoading(true);
      
      // Primeiro excluir todas as lições do estudo
      const { error: lessonsError } = await supabase
        .from('lessons')
        .delete()
        .eq('study_id', selectedStudy.id);

      if (lessonsError) throw lessonsError;
      
      // Depois excluir o estudo
      const { error } = await supabase
        .from('bible_studies')
        .delete()
        .eq('id', selectedStudy.id);

      if (error) throw error;
      
      toast({
        title: "Sucesso",
        description: "Estudo bíblico removido com sucesso"
      });
      
      setIsDeleteStudyDialogOpen(false);
      fetchStudies();
    } catch (error) {
      console.error("Erro ao excluir estudo:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao excluir o estudo",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDeleteLesson() {
    if (!selectedLesson?.id) return;
    
    try {
      setFormLoading(true);
      const { error } = await supabase
        .from('lessons')
        .delete()
        .eq('id', selectedLesson.id);

      if (error) throw error;
      
      toast({
        title: "Sucesso",
        description: "Lição removida com sucesso"
      });
      
      setIsDeleteLessonDialogOpen(false);
      fetchStudies();
    } catch (error) {
      console.error("Erro ao excluir lição:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao excluir a lição",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDragEnd(result: any) {
    // Se o item foi solto fora da área de droppable, não fazemos nada
    if (!result.destination) return;
    
    // Se a ordem não mudou, não fazemos nada
    if (result.destination.index === result.source.index) return;
    
    // ID do estudo
    const studyId = parseInt(result.draggableId.split('-')[0]);
    
    // Encontrar o estudo correspondente
    const study = studies.find(s => s.id === studyId);
    if (!study || !study.lessons) return;
    
    // Criar uma cópia das lições e reordenar
    const lessons = [...study.lessons];
    const [movedLesson] = lessons.splice(result.source.index, 1);
    lessons.splice(result.destination.index, 0, movedLesson);
    
    // Atualizar a ordem das lições
    const updatedLessons = lessons.map((lesson, index) => ({
      ...lesson,
      order: index + 1
    }));
    
    try {
      // Atualizar cada lição com sua nova ordem
      for (const lesson of updatedLessons) {
        const { error } = await supabase
          .from('lessons')
          .update({ order: lesson.order })
          .eq('id', lesson.id);
        
        if (error) throw error;
      }
      
      // Atualizar o estado local
      const updatedStudies = studies.map(s => {
        if (s.id === studyId) {
          return { ...s, lessons: updatedLessons };
        }
        return s;
      });
      
      setStudies(updatedStudies);
      
      toast({
        title: "Sucesso",
        description: "Ordem das lições atualizada"
      });
    } catch (error) {
      console.error("Erro ao reordenar lições:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao reordenar as lições",
        variant: "destructive"
      });
    }
  }

  return (
    <PageLayout>
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-church-blue">Administração de Estudos Bíblicos</h1>
          <Button onClick={openAddStudyDialog} className="rounded-full">
            <Plus className="mr-2 h-4 w-4" /> Adicionar Estudo
          </Button>
        </div>

        <Tabs defaultValue="estudos" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="estudos" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" /> 
              Estudos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="estudos">
            <Card>
              <CardHeader>
                <CardTitle>Estudos Bíblicos</CardTitle>
                <CardDescription>Gerencie os estudos bíblicos disponíveis</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center items-center py-20">
                    <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
                    <span className="ml-2">Carregando...</span>
                  </div>
                ) : studies.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-gray-500">Não há estudos bíblicos cadastrados.</p>
                    <Button onClick={openAddStudyDialog} className="mt-4">
                      Adicionar Primeiro Estudo
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-end mb-4">
                      <Button onClick={openAddStudyDialog} variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" /> Adicionar Mais Estudos
                      </Button>
                    </div>
                    <Accordion type="multiple" className="space-y-4">
                      {studies.map((study) => (
                        <AccordionItem key={study.id} value={`study-${study.id}`} className="border rounded-lg p-1">
                          <div className="flex items-start justify-between p-2">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-md overflow-hidden">
                                <img 
                                  src={study.image} 
                                  alt={study.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{study.title}</h3>
                                <p className="text-sm text-gray-500">{study.instructor}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openEditStudyDialog(study);
                                }}
                                className="text-blue-500"
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openDeleteStudyDialog(study);
                                }}
                                className="text-red-500"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <AccordionTrigger className="px-4">
                            <span className="text-sm font-normal">
                              {study.lessons?.length || 0} lições - Clique para ver
                            </span>
                          </AccordionTrigger>
                          
                          <AccordionContent className="px-4 pb-4">
                            <div className="mt-2 mb-4 flex justify-between items-center">
                              <h4 className="text-sm font-medium">Lições</h4>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => openAddLessonDialog(study)}
                                className="h-8"
                              >
                                <Plus className="mr-1 h-3 w-3" /> 
                                Adicionar Lição
                              </Button>
                            </div>
                            
                            {study.lessons && study.lessons.length > 0 ? (
                              <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId={`study-${study.id}`}>
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.droppableProps}
                                      className="space-y-2"
                                    >
                                      {study.lessons.map((lesson, index) => (
                                        <Draggable
                                          key={lesson.id}
                                          draggableId={`${study.id}-lesson-${lesson.id}`}
                                          index={index}
                                        >
                                          {(provided) => (
                                            <div
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              className="bg-gray-50 p-3 rounded-md border flex items-center justify-between"
                                            >
                                              <div className="flex items-center gap-3">
                                                <div 
                                                  {...provided.dragHandleProps}
                                                  className="text-gray-400 cursor-move"
                                                >
                                                  <GripVertical className="h-4 w-4" />
                                                </div>
                                                <div>
                                                  <p className="font-medium text-sm">
                                                    {lesson.order}. {lesson.title}
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="flex gap-1">
                                                <Button 
                                                  variant="ghost" 
                                                  size="icon" 
                                                  onClick={() => openEditLessonDialog(study, lesson)}
                                                  className="h-7 w-7 text-blue-500"
                                                >
                                                  <Pencil className="h-3 w-3" />
                                                </Button>
                                                <Button 
                                                  variant="ghost" 
                                                  size="icon" 
                                                  onClick={() => openDeleteLessonDialog(study, lesson)}
                                                  className="h-7 w-7 text-red-500"
                                                >
                                                  <Trash2 className="h-3 w-3" />
                                                </Button>
                                              </div>
                                            </div>
                                          )}
                                        </Draggable>
                                      ))}
                                      {provided.placeholder}
                                    </div>
                                  )}
                                </Droppable>
                              </DragDropContext>
                            ) : (
                              <p className="text-sm text-gray-500 text-center py-4">
                                Nenhuma lição cadastrada para este estudo.
                              </p>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </>
                )}
              </CardContent>
              <CardFooter className="border-t pt-6">
                <p className="text-sm text-gray-500">Total: {studies.length} estudos bíblicos</p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Diálogo para adicionar/editar estudo */}
      <Dialog open={isStudyDialogOpen} onOpenChange={setIsStudyDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedStudy ? "Editar Estudo" : "Adicionar Estudo"}</DialogTitle>
            <DialogDescription>
              Preencha os dados do estudo bíblico
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">Título</label>
              <Input
                id="title"
                name="title"
                value={studyFormData.title}
                onChange={handleStudyInputChange}
                placeholder="Ex: A Verdade Revelada"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="instructor" className="text-sm font-medium">Instrutor</label>
              <Input
                id="instructor"
                name="instructor"
                value={studyFormData.instructor}
                onChange={handleStudyInputChange}
                placeholder="Ex: Pr. José Silva"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="image" className="text-sm font-medium">Imagem</label>
              
              {/* Preview da imagem */}
              {imagePreview && (
                <div className="mb-4 flex justify-center">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="h-40 object-contain rounded-lg border"
                  />
                </div>
              )}
              
              {/* Botão de upload */}
              <div className="flex flex-col gap-2 items-center">
                <input
                  type="file"
                  id="image-upload"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Selecionar Imagem
                </Button>
                
                {/* Ou usar URL */}
                <div className="flex items-center w-full my-2">
                  <div className="h-px bg-gray-200 flex-grow"></div>
                  <span className="px-2 text-xs text-gray-400">OU</span>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                </div>
                
                <Input
                  id="image"
                  name="image"
                  value={studyFormData.image}
                  onChange={handleStudyInputChange}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">Descrição</label>
              <Textarea
                id="description"
                name="description"
                value={studyFormData.description}
                onChange={handleStudyInputChange}
                placeholder="Descrição do estudo bíblico"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp do Instrutor</label>
              <Input
                id="whatsapp"
                name="whatsapp"
                value={studyFormData.whatsapp}
                onChange={handleStudyInputChange}
                placeholder="Ex: 5511999999999 (apenas números)"
              />
              <p className="text-xs text-gray-500">
                Inclua o código do país (55) e DDD, sem espaços ou caracteres especiais. 
                Este número será usado no botão de WhatsApp na página de estudos bíblicos.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsStudyDialogOpen(false)}>
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button onClick={handleSaveStudy} disabled={formLoading || uploadLoading}>
              {formLoading || uploadLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                  {uploadLoading ? "Enviando imagem..." : "Salvando..."}
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Salvar
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo para adicionar/editar lição */}
      <Dialog open={isLessonDialogOpen} onOpenChange={setIsLessonDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedLesson ? "Editar Lição" : "Adicionar Lição"}</DialogTitle>
            <DialogDescription>
              Preencha os dados da lição
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">Título</label>
              <Input
                id="title"
                name="title"
                value={lessonFormData.title}
                onChange={handleLessonInputChange}
                placeholder="Ex: Introdução ao Livro de Daniel"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="order" className="text-sm font-medium">Ordem</label>
              <Input
                id="order"
                name="order"
                type="number"
                min="1"
                value={lessonFormData.order}
                onChange={handleLessonInputChange}
                placeholder="1"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">Descrição</label>
              <Textarea
                id="description"
                name="description"
                value={lessonFormData.description}
                onChange={handleLessonInputChange}
                placeholder="Descrição da lição"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsLessonDialogOpen(false)}>
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button onClick={handleSaveLesson} disabled={formLoading}>
              {formLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Salvar
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de confirmação para excluir estudo */}
      <AlertDialog open={isDeleteStudyDialogOpen} onOpenChange={setIsDeleteStudyDialogOpen}>
        <AlertDialogContent className="max-h-[90vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o estudo "{selectedStudy?.title}"? 
              Esta ação também excluirá todas as lições associadas e não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteStudy} disabled={formLoading}>
              {formLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Excluindo...
                </>
              ) : "Excluir"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Diálogo de confirmação para excluir lição */}
      <AlertDialog open={isDeleteLessonDialogOpen} onOpenChange={setIsDeleteLessonDialogOpen}>
        <AlertDialogContent className="max-h-[90vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a lição "{selectedLesson?.title}"? 
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteLesson} disabled={formLoading}>
              {formLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Excluindo...
                </>
              ) : "Excluir"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PageLayout>
  );
} 