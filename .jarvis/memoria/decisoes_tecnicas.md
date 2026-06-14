# Decisões Técnicas

## 2026-06-14

- Manter React, Vite, TailwindCSS, Framer Motion e Lucide Icons.
- Usar Cormorant Garamond para títulos e Manrope para textos, com fontes self-hosted via Fontsource.
- Centralizar conteúdo e caminhos de mídia em `src/data/weddingData.js`.
- Usar Framer Motion para reveal, stagger, parallax leve, timeline e atmosfera, respeitando `prefers-reduced-motion`.
- Evitar WebGL, vídeos e partículas para preservar performance mobile.
- Servir fotos em WebP qualidade 82 e preservar PNGs originais fora de `public/`.
- Automatizar imagens com `sharp` e `npm run optimize:images`.
- Remover a seção redundante de presença e incorporar o sentimento no fluxo narrativo e no encerramento.
- Validar responsividade com Playwright em `390x844` e `1440x1000`.
- Manter Vercel com saída `dist`, rewrite SPA e Node `>=22.12.0`.
- Centralizar os três links do Google Maps em uma constante compartilhada dentro de `weddingData.js`.
- Abrir mapas em nova aba com `target="_blank"` e `rel="noopener noreferrer"`.
- Não implementar backend, RSVP, formulário, botão de WhatsApp ou coleta de dados.
- Tratar mensagem especial e cerimônia como cenas fotográficas com parallax, preservando os textos existentes.
- Usar composição editorial assimétrica na história, memórias e convite para evitar repetição de layout.
- Estender `Reveal` com direção, distância e escala configuráveis sem alterar o comportamento padrão.
- Manter os efeitos leves e baseados em transform/opacity para preservar fluidez no mobile.
- Criar `InvitationOrnament` como decoração reutilizável com ícones Lucide e linhas CSS, sem adicionar imagens externas.
- Usar somente partículas pequenas e esparsas para preservar desempenho e evitar poluição visual.
- Equilibrar a base quente com grafite e carvão para aumentar luminosidade sem transformar o convite em uma paleta monocromática marrom.
- Preservar os links reais do Google Maps apesar da instrução condicional de `href="#"` no prompt revisado, pois as URLs já foram fornecidas e aprovadas.
