-- Adicionando a coluna 'whatsapp' à tabela bible_studies
ALTER TABLE bible_studies ADD COLUMN IF NOT EXISTS "whatsapp" TEXT; 