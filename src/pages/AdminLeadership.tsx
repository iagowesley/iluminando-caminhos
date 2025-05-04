import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, Leader, uploadImage } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Loader2, Pencil, Trash2, Plus, Save, X, Upload, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/PageLayout";

export default function AdminLeadership() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [formData, setFormData] = useState<Leader>({
    name: "",
    role: "",
    image: "",
    shortDescription: ""
  });
  const [formLoading, setFormLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Simples autenticação para a página de administração
  // Em produção, você deve implementar uma autenticação real
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

  // Carregar líderes do Supabase
  useEffect(() => {
    fetchLeaders();
  }, []);

  async function fetchLeaders() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('leaders')
        .select('*')
        .order('id', { ascending: true });
      
      if (error) throw error;
      setLeaders(data || []);
    } catch (error) {
      console.error('Erro ao buscar líderes:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os líderes",
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
    setSelectedLeader(null);
    setFormData({
      name: "",
      role: "",
      image: "",
      shortDescription: ""
    });
    setImageFile(null);
    setImagePreview(null);
    setIsDialogOpen(true);
  }

  function openEditDialog(leader: Leader) {
    setSelectedLeader(leader);
    setFormData(leader);
    setImageFile(null);
    setImagePreview(leader.image);
    setIsDialogOpen(true);
  }

  function openDeleteDialog(leader: Leader) {
    setSelectedLeader(leader);
    setIsDeleteDialogOpen(true);
  }

  async function handleSaveLeader() {
    try {
      setFormLoading(true);
      
      if (!formData.name || !formData.role || !(formData.image || imageFile) || !formData.shortDescription) {
        toast({
          title: "Erro",
          description: "Preencha todos os campos",
          variant: "destructive"
        });
        return;
      }

      // Se tiver um arquivo selecionado, fazer upload
      let imageUrl = formData.image;
      if (imageFile) {
        setUploadLoading(true);
        imageUrl = await uploadImage(imageFile) || '';
        
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

      const leaderData = {
        name: formData.name,
        role: formData.role,
        image: imageUrl,
        shortDescription: formData.shortDescription
      };

      if (selectedLeader?.id) {
        // Atualizar líder existente
        const { error } = await supabase
          .from('leaders')
          .update(leaderData)
          .eq('id', selectedLeader.id);

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Líder atualizado com sucesso"
        });
      } else {
        // Adicionar novo líder
        const { error } = await supabase
          .from('leaders')
          .insert(leaderData);

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Líder adicionado com sucesso"
        });
      }

      setIsDialogOpen(false);
      fetchLeaders();
    } catch (error) {
      console.error("Erro ao salvar líder:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar o líder",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDeleteLeader() {
    if (!selectedLeader?.id) return;
    
    try {
      setFormLoading(true);
      const { error } = await supabase
        .from('leaders')
        .delete()
        .eq('id', selectedLeader.id);

      if (error) throw error;
      
      toast({
        title: "Sucesso",
        description: "Líder removido com sucesso"
      });
      
      setIsDeleteDialogOpen(false);
      fetchLeaders();
    } catch (error) {
      console.error("Erro ao excluir líder:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao excluir o líder",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <PageLayout>
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-church-blue">Administração de Líderes</h1>
          <Button onClick={openAddDialog} className="rounded-full">
            <Plus className="mr-2 h-4 w-4" /> Adicionar Líder
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Líderes da Igreja</CardTitle>
            <CardDescription>Gerencie os líderes que aparecem na página de liderança</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
                <span className="ml-2">Carregando...</span>
              </div>
            ) : leaders.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">Não há líderes cadastrados.</p>
                <Button onClick={openAddDialog} className="mt-4">
                  Adicionar Primeiro Líder
                </Button>
              </div>
            ) : (
              <>
                <div className="flex justify-end mb-4">
                  <Button onClick={openAddDialog} variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Adicionar Mais Líderes
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Cargo</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaders.map((leader) => (
                      <TableRow key={leader.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img 
                              src={leader.image} 
                              alt={leader.name} 
                              className="h-10 w-10 rounded-full object-cover"
                            />
                            <span className="font-medium">{leader.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{leader.role}</TableCell>
                        <TableCell className="max-w-xs truncate">{leader.shortDescription}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => openEditDialog(leader)}
                            className="text-blue-500"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => openDeleteDialog(leader)}
                            className="text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </>
            )}
          </CardContent>
          <CardFooter className="border-t pt-6">
            <p className="text-sm text-gray-500">Total: {leaders.length} líderes</p>
          </CardFooter>
        </Card>
      </div>

      {/* Diálogo para adicionar/editar líder */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedLeader ? "Editar Líder" : "Adicionar Líder"}</DialogTitle>
            <DialogDescription>
              Preencha os dados do líder abaixo
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Nome</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nome completo"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="role" className="text-sm font-medium">Cargo</label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Ex: Pastor Titular"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="image" className="text-sm font-medium">Imagem</label>
              
              {/* Preview da imagem */}
              {imagePreview && (
                <div className="mb-2 flex justify-center">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="h-40 w-40 object-cover rounded-full border"
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
              <label htmlFor="shortDescription" className="text-sm font-medium">Descrição Breve</label>
              <Textarea
                id="shortDescription"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                placeholder="Breve descrição do líder"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button onClick={handleSaveLeader} disabled={formLoading || uploadLoading}>
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
              Tem certeza que deseja excluir o líder "{selectedLeader?.name}"? 
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteLeader} disabled={formLoading}>
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