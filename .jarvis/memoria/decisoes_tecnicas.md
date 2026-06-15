# Decisões Técnicas

## 2026-06-14

- Manter React, Vite, TailwindCSS e Lucide Icons.
- Usar Cormorant Garamond e Manrope self-hosted apenas nos pesos necessários.
- Substituir Framer Motion por IntersectionObserver e transições CSS nativas.
- Remover listeners de scroll, parallax e filtros animados do caminho crítico.
- Permitir motion cinematográfico no mobile somente com transform/opacity e
  ativação por viewport.
- Pausar automaticamente animações de cenas fora da região visível.
- Usar fades direcionais e stagger com limpeza de `will-change` após a entrada.
- Respeitar `prefers-reduced-motion`.
- Desativar `backdrop-filter`, atmosfera e halos de alto custo no mobile.
- Servir fotos WebP de 900 px qualidade 78 e 1200 px qualidade 82 via `srcset`.
- Preservar PNGs originais em `assets/source-images/`.
- Gerar uma textura raster pequena em vez de SVG com `feTurbulence`.
- Automatizar imagens com Sharp e `npm run optimize:images`.
- Manter conteúdo e mapas centralizados em `src/data/weddingData.js`.
- Manter site estático, sem backend, RSVP, formulário ou coleta de dados.
- Validar mobile `390x844` e desktop `1440x1000` com Playwright.
- Usar Vercel com `npm ci`, build Vite, saída `dist` e rewrite SPA.
- Definir cache de um dia com revalidação para imagens públicas.
- Manter o script `profile:runtime` para comparar prévia e produção.
- Manter teste Playwright específico para garantir que o motion não seja
  removido em futuras otimizações.
