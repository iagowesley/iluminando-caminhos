import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, Event, eventCategories, uploadImage } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Loader2, Pencil, Trash2, Plus, Save, X, Upload, Calendar, Clock, MapPin, Users, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/PageLayout";
import AdminAuth from "@/components/AdminAuth";

export default function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<Event>({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: "espiritual",
    image: "",
    featured: false,
    audience: ""
  });
  const [formLoading, setFormLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Simples autenticação para a página de administração
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

  // Carregar eventos do Supabase
  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os eventos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleCategoryChange(value: string) {
    setFormData(prev => ({ ...prev, category: value }));
  }

  function handleFeaturedChange(checked: boolean) {
    setFormData(prev => ({ ...prev, featured: checked }));
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

  function openAddDialog() {
    setSelectedEvent(null);
    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      category: "espiritual",
      image: "",
      featured: false,
      audience: ""
    });
    setImageFile(null);
    setImagePreview(null);
    setIsDialogOpen(true);
  }

  function openEditDialog(event: Event) {
    setSelectedEvent(event);
    setFormData(event);
    setImageFile(null);
    setImagePreview(event.image);
    setIsDialogOpen(true);
  }

  function openDeleteDialog(event: Event) {
    setSelectedEvent(event);
    setIsDeleteDialogOpen(true);
  }

  async function handleSaveEvent() {
    try {
      setFormLoading(true);
      
      if (!formData.title || !formData.date || !formData.time || !formData.location || 
          !formData.description || !formData.category || !(formData.image || imageFile)) {
        toast({
          title: "Erro",
          description: "Preencha todos os campos obrigatórios",
          variant: "destructive"
        });
        return;
      }

      // Se tiver um arquivo selecionado, fazer upload
      let imageUrl = formData.image;
      if (imageFile) {
        setUploadLoading(true);
        imageUrl = await uploadImage(imageFile, 'events') || '';
        
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

      const eventData = {
        title: formData.title,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        description: formData.description,
        category: formData.category,
        image: imageUrl,
        featured: formData.featured,
        audience: formData.audience
      };

      console.log("Salvando evento:", eventData);

      if (selectedEvent?.id) {
        // Atualizar evento existente
        const { data, error } = await supabase
          .from('events')
          .update(eventData)
          .eq('id', selectedEvent.id)
          .select();

        if (error) throw error;
        
        // Atualiza localmente o estado para garantir atualização imediata da UI
        if (data && data.length > 0) {
          setEvents(prev => 
            prev.map(e => e.id === selectedEvent.id ? data[0] : e)
          );
        }
        
        toast({
          title: "Sucesso",
          description: "Evento atualizado com sucesso"
        });
      } else {
        // Adicionar novo evento
        const { data, error } = await supabase
          .from('events')
          .insert(eventData)
          .select();

        if (error) throw error;
        
        // Adiciona o novo evento ao estado para garantir atualização imediata da UI
        if (data && data.length > 0) {
          setEvents(prev => [data[0], ...prev]);
        }
        
        toast({
          title: "Sucesso",
          description: "Evento adicionado com sucesso"
        });
      }

      setIsDialogOpen(false);
      
      // Garante que os dados sejam recarregados do servidor
      setTimeout(() => {
        fetchEvents();
      }, 500);
    } catch (error) {
      console.error("Erro ao salvar evento:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar o evento",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDeleteEvent() {
    if (!selectedEvent?.id) return;
    
    try {
      setFormLoading(true);
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', selectedEvent.id);

      if (error) throw error;
      
      toast({
        title: "Sucesso",
        description: "Evento removido com sucesso"
      });
      
      setIsDeleteDialogOpen(false);
      fetchEvents();
    } catch (error) {
      console.error("Erro ao excluir evento:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao excluir o evento",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  // Filtragem de eventos por categoria
  const filteredEvents = activeCategory === "todos"
    ? events
    : events.filter(event => event.category === activeCategory);

  return (
    <PageLayout isAdmin>
      <AdminAuth pageName="Eventos" />
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-church-blue">Administração de Eventos</h1>
          <Button onClick={openAddDialog} className="rounded-full">
            <Plus className="mr-2 h-4 w-4" /> Adicionar Evento
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Eventos da Igreja</CardTitle>
            <CardDescription>Gerencie os eventos que aparecem na página de eventos</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Filtros */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Filtrar por categoria:</span>
              </div>
              <Select
                value={activeCategory}
                onValueChange={setActiveCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  {eventCategories.map(category => (
                    <SelectItem key={category} value={category} className="capitalize">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
                <span className="ml-2">Carregando...</span>
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">Não há eventos cadastrados{activeCategory !== "todos" ? ` na categoria "${activeCategory}"` : ''}.</p>
                <Button onClick={openAddDialog} className="mt-4">
                  Adicionar Primeiro Evento
                </Button>
              </div>
            ) : (
              <>
                <div className="flex justify-end mb-4">
                  <Button onClick={openAddDialog} variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Adicionar Mais Eventos
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Evento</TableHead>
                        <TableHead>Data e Hora</TableHead>
                        <TableHead>Local</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Público-alvo</TableHead>
                        <TableHead>Destaque</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEvents.map((event) => (
                        <TableRow key={event.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 overflow-hidden rounded-md">
                                <img 
                                  src={event.image} 
                                  alt={event.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">{event.title}</p>
                                <p className="text-sm text-gray-500 line-clamp-1">{event.description}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1 text-gray-500" />
                                <span className="text-sm">{event.date}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                <Clock className="h-3 w-3 mr-1 text-gray-500" />
                                <span className="text-sm">{event.time}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                              <span className="text-sm">{event.location}</span>
                            </div>
                          </TableCell>
                          <TableCell className="capitalize">{event.category}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1 text-gray-500" />
                              <span className="text-sm">{event.audience || "Todos"}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {event.featured ? (
                              <div className="flex items-center text-yellow-500">
                                <Star className="h-4 w-4 fill-yellow-500" />
                                <span className="text-xs ml-1">Destaque</span>
                              </div>
                            ) : (
                              <span className="text-xs text-gray-400">Não</span>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => openEditDialog(event)}
                              className="text-blue-500"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => openDeleteDialog(event)}
                              className="text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="border-t pt-6">
            <p className="text-sm text-gray-500">Total: {filteredEvents.length} eventos{activeCategory !== "todos" ? ` na categoria "${activeCategory}"` : ''}</p>
          </CardFooter>
        </Card>
      </div>

      {/* Diálogo para adicionar/editar evento */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedEvent ? "Editar Evento" : "Adicionar Evento"}</DialogTitle>
            <DialogDescription>
              Preencha os dados do evento abaixo
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">Título do Evento*</label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Ex: Semana de Oração"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="date" className="text-sm font-medium">Data*</label>
              <Input
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                placeholder="Ex: 10-17 de Abril, 2024"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="time" className="text-sm font-medium">Horário*</label>
              <Input
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                placeholder="Ex: 19h30"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="location" className="text-sm font-medium">Local*</label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Ex: Igreja Central"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="audience" className="text-sm font-medium">Público-alvo</label>
              <Input
                id="audience"
                name="audience"
                value={formData.audience || ""}
                onChange={handleInputChange}
                placeholder="Ex: Jovens e Adolescentes"
              />
              <p className="text-xs text-gray-500">Deixe em branco para 'Todos'</p>
            </div>
            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">Categoria*</label>
              <Select
                value={formData.category}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {eventCategories.map(category => (
                    <SelectItem key={category} value={category} className="capitalize">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="image" className="text-sm font-medium">Imagem*</label>
              
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
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">Descrição*</label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descrição detalhada do evento"
                rows={4}
              />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox 
                id="featured" 
                checked={formData.featured || false}
                onCheckedChange={handleFeaturedChange}
              />
              <label
                htmlFor="featured"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Destacar na página de eventos
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button onClick={handleSaveEvent} disabled={formLoading || uploadLoading}>
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

      {/* Diálogo de confirmação para excluir */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="max-h-[90vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o evento "{selectedEvent?.title}"? 
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteEvent} disabled={formLoading}>
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