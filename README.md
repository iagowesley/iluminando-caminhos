# IASD Central Russas - Site Oficial

Este é o site oficial da Igreja Adventista do Sétimo Dia Central de Russas-CE. O projeto foi desenvolvido utilizando React, Vite, TypeScript e TailwindCSS com Shadcn/UI para componentes.

## 📋 Funcionalidades

- Slideshow interativo na página inicial
- Informações sobre a igreja, crenças e serviços
- Exibição de eventos e calendário da igreja
- Galeria de fotos
- Informações de contato e localização
- Design responsivo para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para criar interfaces de usuário
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Ferramenta de build rápida para desenvolvimento web
- **TailwindCSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de UI reutilizáveis
- **React Router** - Roteamento para aplicações React

## 🚀 Começando

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/iluminando-caminhos.git
   cd iluminando-caminhos
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse `http://localhost:8080` no seu navegador

## 🔧 Compilando para produção

```bash
npm run build
# ou
yarn build
```

Os arquivos compilados estarão na pasta `dist`.

## 🚀 Deploy no Netlify

Este projeto está configurado para fácil deploy no Netlify. Você pode fazer deploy de duas formas:

### 1. Deploy direto pelo GitHub

1. Faça o fork ou push do projeto para o seu repositório GitHub
2. No Netlify, clique em "New site from Git"
3. Selecione o GitHub e o repositório correto
4. Nas configurações de build, mantenha os valores padrão:
   - Branch: `main` (ou sua branch principal)
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em "Deploy site"

### 2. Deploy manual

1. Compile o projeto:
   ```bash
   npm run build
   ```
2. Faça o deploy da pasta `dist`:
   - Arraste e solte a pasta `dist` na interface do Netlify
   - OU use o Netlify CLI:
     ```bash
     npx netlify deploy --prod
     ```

## 🔄 Atualização de Conteúdo

Para atualizar as imagens do slideshow ou outras imagens:

1. Substitua os arquivos na pasta `public/images/`
2. As imagens do slideshow são nomeadas como `church-1.jpg`, `church-2.jpg`, etc.

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## ✨ Créditos

Desenvolvido para a Igreja Adventista do Sétimo Dia Central de Russas-CE.

---

Para mais informações, entre em contato com a administração da igreja.
