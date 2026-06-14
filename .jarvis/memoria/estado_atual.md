# Estado Atual

## Situação

Convite web otimizado para carregamento e navegação mobile.

## Demanda mais recente

Usuário relatou lentidão e pediu revisão das configurações da Vercel e dos
ajustes possíveis via código.

## Classificação

- Tipo: performance frontend e configuração de deploy
- Prioridade: experiência mobile via link do WhatsApp
- Domínio principal: frontend
- Agentes considerados: Jarvis, frontend_master, qa_master e devops_cloud_master

## Implementação

- React, Vite, TailwindCSS e Lucide Icons mantidos.
- Framer Motion removido do runtime.
- Reveals usam IntersectionObserver e CSS.
- Parallax por scroll e animações contínuas foram removidos.
- Atmosfera é estática e não usa mais camadas fixas no scroll.
- `backdrop-filter` e halos animados são desativados no mobile.
- Grain SVG foi substituído por WebP de aproximadamente 2,5 KB.
- Fotos usam `srcset` com WebP de 900 px no mobile e 1200 px no desktop.
- Fontes não utilizadas foram removidas do bundle.
- Vercel usa `npm ci`, saída `dist`, rewrite SPA e cache para `/images/*`.

## Resultado medido

- JavaScript: 340 KB para 214 KB.
- JavaScript gzip: 104 KB para 68 KB.
- Transferência mobile: 527 KB para 344 KB.
- Script durante scroll: 1.038 ms para 83 ms.
- Recálculo de estilo: 1.219 ms para 66 ms.
- Quadros acima de 34 ms: 30 para 0.
- Percentil 95 dos frames: 33,4 ms para 16,7 ms.

## Validação

- `npm run optimize:images`: aprovado.
- `npm run build`: aprovado.
- `npm audit`: zero vulnerabilidades.
- `npm run test:e2e`: dois testes aprovados.
- Screenshots mobile e desktop revisadas.

## Próximo passo

Publicar na Vercel, medir a URL pública e conferir headers/cache em celular real.
