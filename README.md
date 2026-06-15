# Convite Douglas & Regiane

Convite web de casamento criado para compartilhamento por WhatsApp, com
experiência mobile-first, cenas fotográficas e composição editorial.

O motion premium inclui fades direcionais, entradas escalonadas, zoom
cinematográfico, partículas e movimento sutil das fotos. As animações são
ativadas por viewport e usam somente `transform` e `opacity`.

## Stack

- React
- Vite
- TailwindCSS
- Lucide Icons
- Cormorant Garamond e Manrope via Fontsource
- Motion nativo com CSS e IntersectionObserver
- Playwright

## Comandos

Requisito: Node.js `>=22.12.0`.

```bash
npm install
npm run dev
npm run build
npm run test:e2e
```

Ao trocar os PNGs em `assets/source-images/`:

```bash
npm run optimize:images
```

Para medir uma prévia local ou a URL publicada:

```bash
npm run profile:runtime -- https://seu-dominio.vercel.app
```

## Vercel

O projeto usa [vercel.json](./vercel.json) com:

- Framework: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Rewrite SPA para `index.html`
- Cache de navegador para `/images/*`

Assets com hash gerados pelo Vite usam o cache padrão da Vercel.

## Estrutura

- `src/data/weddingData.js`: textos, locais, links e caminhos das fotos.
- `src/components/`: seções e componentes do convite.
- `src/styles/index.css`: identidade visual e responsividade.
- `assets/source-images/`: PNGs originais.
- `public/images/`: WebP de 900 px e 1200 px.
- `scripts/optimize-images.mjs`: pipeline das imagens.
- `scripts/profile-runtime.mjs`: perfil de carregamento e scroll.
- `tests/invitation.spec.js`: validação mobile e desktop.

## Performance

Comparação local em viewport `390x844`:

- JavaScript: 340 KB para 214 KB, ou 104 KB para 68 KB com gzip.
- Transferência no percurso mobile: 527 KB para 344 KB.
- Trabalho de script no scroll: 1.038 ms para 83 ms.
- Quadros acima de 34 ms: 30 para 0.
- Percentil 95 dos frames: 33,4 ms para 16,7 ms.

Após a retomada do motion premium, o perfil permaneceu em 16,7 ms no percentil
95, sem quadros acima de 34 ms e com 345 KB transferidos.

No mobile, o navegador seleciona fotos WebP de 900 px, entre 57 e 67 KB.
No desktop, pode selecionar as variantes de 1200 px.

## Validação

Executado em 2026-06-14:

- Build Vite aprovado.
- `npm audit`: zero vulnerabilidades.
- Playwright: quatro testes aprovados em `390x844` e `1440x1000`, incluindo
  validação de ativação das animações por viewport.
- Revisão visual por screenshots completas.

## Publicação

Depois do deploy, verificar:

```bash
curl -I https://seu-dominio.vercel.app/
curl -I https://seu-dominio.vercel.app/images/2-900.webp
```

Conferir `content-encoding`, `cache-control`, `x-vercel-cache` e `age`, além de
testar a URL em um celular real.
