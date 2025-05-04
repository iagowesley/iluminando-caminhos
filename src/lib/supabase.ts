import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mewptqvoiecyzhtgscya.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ld3B0cXZvaWVjeXpodGdzY3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzMTU0NjcsImV4cCI6MjA2MTg5MTQ2N30.ejr4q9bvA8kmCXtQTneuyw0vqTZtwaBbqWJuKKT6dFU'
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ld3B0cXZvaWVjeXpodGdzY3lhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjMxNTQ2NywiZXhwIjoyMDYxODkxNDY3fQ.QEHnJoaKxykjOFd89irqwtR72pRhojmNcrc6Nk1mh-s'

// Criando o cliente com a chave anônima para uso no frontend
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Criando o cliente com a chave de serviço para operações administrativas
// OBS: Essa chave normalmente não deve ser exposta no frontend
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)

// Tipo para os líderes da igreja
export type Leader = {
  id?: number
  name: string
  role: string
  image: string
  shortDescription: string
  created_at?: string
}

// Tipo para as fotos da galeria
export type Photo = {
  id?: number
  src: string
  alt: string
  category: string
  created_at?: string
}

// Tipo para aula/lição de um estudo bíblico
export type Lesson = {
  id?: number
  study_id: number
  title: string
  description: string
  order: number
  created_at?: string
}

// Tipo para estudos bíblicos
export type BibleStudy = {
  id?: number
  title: string
  description: string
  image: string
  instructor: string
  whatsapp?: string
  lessons?: Lesson[]
  created_at?: string
}

// Tipo para os tipos de culto
export type ServiceType = {
  id?: number
  name: string
  default_time: string
  order_index: number
  created_at?: string
}

// Tipo para escalas
export type Schedule = {
  id?: number
  service_type_id: number
  date: string
  preacher?: string
  worship?: string
  reception?: string
  opening?: string
  sabbath_school?: string
  deacons?: string
  platform?: string
  created_at?: string
  service_type?: ServiceType
}

// Categorias de fotos disponíveis
export const photoCategories = [
  "igreja",
  "cultos",
  "jovens",
  "batismos",
  "crianças",
  "serviço",
  "estudo",
  "eventos"
];

// Função para upload de imagens
export async function uploadImage(file: File, bucket: string = 'leaders'): Promise<string | null> {
  try {
    // Verificar se o arquivo é uma imagem
    if (!file.type.startsWith('image/')) {
      throw new Error('Apenas arquivos de imagem são permitidos')
    }

    // Gerar um nome único para o arquivo
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    // Fazer upload do arquivo
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file)

    if (error) {
      throw error
    }

    // Gerar URL pública
    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath)

    return urlData.publicUrl
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error)
    return null
  }
} 