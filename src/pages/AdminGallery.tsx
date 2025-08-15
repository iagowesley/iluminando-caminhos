import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, Photo, photoCategories, uploadImage } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Loader2, Pencil, Trash2, Plus, Save, X, Upload, Image as ImageIcon, Filter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/PageLayout";
import AdminAuth from "@/components/AdminAuth";

export default function AdminGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [formData, setFormData] = useState<Photo>({
    src: "",
    alt: "",
    category: "igreja"
  });
  const [formLoading, setFormLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("todos");
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

  // Carregar fotos do Supabase
  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setPhotos(data || []);
    } catch (error) {
      console.error('Erro ao buscar fotos:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as fotos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleCategoryChange(value: string) {
    setFormData(prev => ({ ...prev, category: value }));
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
    setSelectedPhoto(null);
    setFormData({
      src: "",
      alt: "",
      category: "igreja"
    });
    setImageFile(null);
    setImagePreview(null);
    setIsDialogOpen(true);
  }

  function openEditDialog(photo: Photo) {
    setSelectedPhoto(photo);
    setFormData(photo);
    setImageFile(null);
    setImagePreview(photo.src);
    setIsDialogOpen(true);
  }

  function openDeleteDialog(photo: Photo) {
    setSelectedPhoto(photo);
    setIsDeleteDialogOpen(true);
  }

  async function handleSavePhoto() {
    try {
      setFormLoading(true);
      
      if (!formData.alt || !(formData.src || imageFile)) {
        toast({
          title: "Erro",
          description: "Preencha todos os campos",
          variant: "destructive"
        });
        return;
      }

      // Se tiver um arquivo selecionado, fazer upload
      let imageUrl = formData.src;
      if (imageFile) {
        setUploadLoading(true);
        imageUrl = await uploadImage(imageFile, 'gallery') || '';
        
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

      const photoData = {
        src: imageUrl,
        alt: formData.alt,
        category: formData.category
      };

      if (selectedPhoto?.id) {
        // Atualizar foto existente
        const { error } = await supabase
          .from('photos')
          .update(photoData)
          .eq('id', selectedPhoto.id);

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Foto atualizada com sucesso"
        });
      } else {
        // Adicionar nova foto
        const { error } = await supabase
          .from('photos')
          .insert(photoData);

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Foto adicionada com sucesso"
        });
      }

      setIsDialogOpen(false);
      fetchPhotos();
    } catch (error) {
      console.error("Erro ao salvar foto:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar a foto",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDeletePhoto() {
    if (!selectedPhoto?.id) return;
    
    try {
      setFormLoading(true);
      const { error } = await supabase
        .from('photos')
        .delete()
        .eq('id', selectedPhoto.id);

      if (error) throw error;
      
      toast({
        title: "Sucesso",
        description: "Foto removida com sucesso"
      });
      
      setIsDeleteDialogOpen(false);
      fetchPhotos();
    } catch (error) {
      console.error("Erro ao excluir foto:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao excluir a foto",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  // Filtragem de fotos por categoria
  const filteredPhotos = filterCategory === "todos"
    ? photos
    : photos.filter(photo => photo.category === filterCategory);

  return (
    <PageLayout isAdmin>
      <AdminAuth pageName="Galeria de Fotos" />
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-church-blue">Administração da Galeria</h1>
          <Button onClick={openAddDialog} className="rounded-full">
            <Plus className="mr-2 h-4 w-4" /> Adicionar Foto
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Galeria de Fotos</CardTitle>
            <CardDescription>Gerencie as fotos que aparecem na galeria</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Filtros */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium">Filtrar por categoria:</span>
              </div>
              <Select
                value={filterCategory}
                onValueChange={setFilterCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  {photoCategories.map(category => (
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
            ) : filteredPhotos.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">Não há fotos cadastradas{filterCategory !== "todos" ? ` na categoria "${filterCategory}"` : ''}.</p>
                <Button onClick={openAddDialog} className="mt-4">
                  Adicionar Primeira Foto
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button onClick={openAddDialog} variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Adicionar Mais Fotos
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Foto</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPhotos.map((photo) => (
                        <TableRow key={photo.id}>
                          <TableCell>
                            <div className="w-16 h-16 overflow-hidden rounded-md">
                              <img 
                                src={photo.src} 
                                alt={photo.alt} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs truncate">{photo.alt}</TableCell>
                          <TableCell className="capitalize">{photo.category}</TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => openEditDialog(photo)}
                              className="text-blue-500"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => openDeleteDialog(photo)}
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
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t pt-6">
            <p className="text-sm text-gray-500">Total: {filteredPhotos.length} fotos{filterCategory !== "todos" ? ` na categoria "${filterCategory}"` : ''}</p>
          </CardFooter>
        </Card>
      </div>

      {/* Diálogo para adicionar/editar foto */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedPhoto ? "Editar Foto" : "Adicionar Foto"}</DialogTitle>
            <DialogDescription>
              Preencha os dados da foto abaixo
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
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
                  id="src"
                  name="src"
                  value={formData.src}
                  onChange={handleInputChange}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="alt" className="text-sm font-medium">Descrição</label>
              <Input
                id="alt"
                name="alt"
                value={formData.alt}
                onChange={handleInputChange}
                placeholder="Descreva a imagem"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">Categoria</label>
              <Select
                value={formData.category}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {photoCategories.map(category => (
                    <SelectItem key={category} value={category} className="capitalize">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button onClick={handleSavePhoto} disabled={formLoading || uploadLoading}>
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
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta foto? 
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePhoto} disabled={formLoading}>
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