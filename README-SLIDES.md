# Slideshow da IASD Central Russas - Instruções

## Implementação do Slideshow na Página Inicial

Conforme solicitado, implementamos um slideshow na seção inicial do site que ocupa toda a viewport. Cada slide contém diferentes informações sobre a igreja, como horários de cultos, atividades e missão.

## Como Funciona

O slideshow foi implementado no componente `Hero.tsx` e inclui:

- **Slides automáticos**: Os slides mudam automaticamente a cada 6 segundos
- **Navegação manual**: Botões de seta para o usuário avançar ou retroceder manualmente
- **Indicadores**: Pontos na parte inferior para mostrar qual slide está ativo e permitir navegação direta
- **Design responsivo**: O slideshow se adapta a todos os tamanhos de tela
- **Fallback de imagem**: Caso as imagens não sejam encontradas, uma imagem genérica de igreja será usada

## Imagens Necessárias

Para que o slideshow funcione corretamente, você precisa adicionar as seguintes imagens:

1. `/public/images/church-1.jpg` - Slide de boas-vindas
2. `/public/images/church-2.jpg` - Slide de horários de culto
3. `/public/images/church-3.jpg` - Slide de atividades da igreja
4. `/public/images/church-4.jpg` - Slide da missão

## Personalização do Conteúdo

Se você deseja alterar o conteúdo dos slides (textos, informações de horários, etc.), você pode editar o arquivo `src/components/Hero.tsx`. Procure pelo array `churchSlides` no início do arquivo e modifique os valores conforme necessário:

```typescript
const churchSlides = [
  {
    image: "/images/church-1.jpg",
    title: "Bem-vindo à Igreja Adventista do Sétimo Dia Central Russas",
    info: "Unidos em fé, esperança e amor."
  },
  {
    image: "/images/church-2.jpg",
    title: "Horários de Culto",
    info: "Sábados: Escola Sabatina 9h | Culto Divino 11h\nQuartas: Culto de Oração 19h\nSextas: Culto Jovem 19h30"
  },
  // ... outros slides
];
```

## Dicas Adicionais

- Use imagens com a mesma proporção para todos os slides (recomendamos 16:9)
- Imagens muito grandes podem afetar o desempenho; redimensione-as para no máximo 1920px de largura
- Você pode adicionar mais slides duplicando um dos objetos no array e modificando seu conteúdo
- Para mudar o tempo entre slides, altere o valor de `6000` (em milissegundos) no `useEffect` do componente

## Suporte

Se precisar de ajuda para ajustar o slideshow ou tiver dúvidas sobre como personalizar mais a aparência, entre em contato com a equipe de desenvolvimento. 