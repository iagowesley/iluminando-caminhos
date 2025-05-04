-- Adicionando a coluna 'order' que está faltando na tabela lessons
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS "order" INT;

-- Atualizando os registros existentes para ter um valor padrão
UPDATE lessons SET "order" = 1 WHERE "order" IS NULL;

-- Adicionando a restrição NOT NULL após garantir que todos os registros têm um valor
ALTER TABLE lessons ALTER COLUMN "order" SET NOT NULL; 