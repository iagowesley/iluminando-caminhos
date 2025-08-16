# 🚀 Guia de Deploy no Netlify

## Problema: Tela branca após deploy

Se seu site está funcionando localmente mas fica com tela branca no Netlify, o problema são as **variáveis de ambiente** não configuradas.

## ✅ Solução: Configurar Variáveis de Ambiente no Netlify

### **Passo 1: Obter as credenciais do Supabase**

1. Acesse seu [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Copie:
   - **URL**: `https://seu-projeto.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

⚠️ **IMPORTANTE**: Use APENAS a `anon key`, nunca a `service_role key`!

### **Passo 2: Configurar no Netlify**

1. **Acesse seu site no Netlify Dashboard**
2. **Vá em Site Settings → Environment Variables**
3. **Adicione as seguintes variáveis:**

| Nome | Valor |
|------|-------|
| `VITE_SUPABASE_URL` | `https://seu-projeto.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `sua-chave-anonima-aqui` |

### **Passo 3: Fazer novo deploy**

1. **Vá em Deploys**
2. **Clique em "Trigger deploy" → "Deploy site"**
3. **Aguarde o build terminar**

## 🎯 Verificação

Após o deploy, seu site deve:
- ✅ Carregar normalmente (sem tela branca)
- ✅ Conectar com o Supabase
- ✅ Mostrar dados do banco de dados

## 🔧 Troubleshooting

### Se ainda estiver com tela branca:

1. **Verifique o console do navegador** (F12)
2. **Confirme se as variáveis estão corretas** no Netlify
3. **Teste as credenciais localmente** criando um arquivo `.env.local`

### Arquivo .env.local para teste local:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

## 📋 Checklist Final

- [ ] Variáveis configuradas no Netlify
- [ ] Novo deploy realizado  
- [ ] Site carregando sem tela branca
- [ ] Dados do Supabase aparecendo
- [ ] Funcionalidades admin funcionando

## 🆘 Se precisar de ajuda

1. Verifique se as credenciais do Supabase estão corretas
2. Confirme se o projeto Supabase está ativo
3. Teste localmente com `.env.local` primeiro
