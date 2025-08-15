# Configuração de Variáveis de Ambiente

## Configuração do Supabase

Para usar este projeto, você precisa configurar as seguintes variáveis de ambiente:

### Variáveis Necessárias

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
# URL do seu projeto Supabase
VITE_SUPABASE_URL=https://seu-projeto.supabase.co

# Chave anônima/pública do Supabase (seguro para frontend)
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

### ⚠️ IMPORTANTE - Segurança

- **NUNCA** inclua a chave de service role (`service_role key`) em aplicações frontend
- Use **APENAS** a chave anônima (`anon key`) no frontend
- Todas as operações administrativas devem ser controladas por **RLS (Row Level Security)**
- Configure políticas adequadas no Supabase para controlar acesso aos dados

### Como Obter as Chaves

1. Acesse seu projeto no [Supabase Dashboard](https://supabase.com/dashboard)
2. Vá em **Settings** → **API**
3. Copie a **URL** e a **anon/public key**
4. **NÃO** copie a service_role key para uso no frontend

### Fallback

Se as variáveis de ambiente não estiverem definidas, o sistema usará as credenciais padrão configuradas no código (apenas para desenvolvimento local).

## Verificação de Segurança

✅ **Corrigido**: Removida a exposição da chave de service role
✅ **Seguro**: Usando apenas chave anônima no frontend
✅ **Controlado**: Operações administrativas via RLS e autenticação
