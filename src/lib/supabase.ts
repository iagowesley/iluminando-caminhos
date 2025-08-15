import { createClient } from '@supabase/supabase-js'

// Configuração do Supabase usando variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Variáveis de ambiente do Supabase não configuradas. ' +
    'Certifique-se de ter um arquivo .env.local com VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY'
  )
}

// Criando o cliente Supabase para uso no frontend
// Usa apenas a chave anônima - todas as operações são controladas por RLS (Row Level Security)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
  is_hidden?: boolean
}

// Tipo para eventos da igreja
export type Event = {
  id?: number
  title: string
  date: string
  time: string
  location: string
  description: string
  category: string
  image: string
  featured?: boolean
  audience?: string
  created_at?: string
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

// Categorias de eventos disponíveis
export const eventCategories = [
  "espiritual",
  "musical",
  "juventude",
  "infantil",
  "família",
  "comunidade"
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

    console.log(`Fazendo upload para o bucket: ${bucket}`)
    
    // Usar sempre o cliente padrão - todas as operações são controladas por RLS
    const client = supabase
    
    // Fazer upload do arquivo
    const { data, error } = await client.storage
      .from(bucket)
      .upload(filePath, file)

    if (error) {
      console.error('Erro no upload:', error)
      throw error
    }

    // Gerar URL pública
    const { data: urlData } = client.storage
      .from(bucket)
      .getPublicUrl(filePath)

    return urlData.publicUrl
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error)
    return null
  }
} 