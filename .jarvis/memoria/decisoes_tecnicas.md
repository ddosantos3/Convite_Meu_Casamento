# Decisões Técnicas

## 2026-06-14

- Usar React com Vite para entregar um convite web leve, simples de editar e adequado a publicação estática.
- Usar TailwindCSS para estilização responsiva mobile-first.
- Usar Framer Motion para entradas suaves, hover discreto, parallax leve no hero/final e timeline animada, respeitando `prefers-reduced-motion`.
- Usar Lucide Icons para ícones minimalistas em datas, horários, locais, cerimônia e cards.
- Centralizar conteúdo, horários, locais, fotos e links em `src/data/weddingData.js`.
- Não implementar backend, RSVP, formulário, botão de WhatsApp nem coleta de dados, conforme regra do prompt.
- Manter `mapUrl: "#"` temporariamente, com comentários para troca pelos links reais do Google Maps.
- Atualizar Vite para `^8.0.16` para eliminar vulnerabilidades reportadas em dependências de desenvolvimento.
- Evoluir a V2 usando imagens reais de `public/images/1.png`, `2.png` e `3.png`.
- Manter os PNGs originais intactos; registrar otimização WebP/JPG como pendência de publicação.
- Preparar Vercel explicitamente com `vercel.json` para `npm install`, `npm run build`, saída `dist` e rewrite SPA para `index.html`.
- Definir Node `>=22.12.0`, compatível com Vite 8.
