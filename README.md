# Convite Douglas & Regiane

Quarta versão conceitual do convite web de casamento para Douglas e Regiane.

O projeto foi criado para ser enviado por WhatsApp e aberto principalmente no celular. A experiência "Uma memória em movimento" combina cenas fotográficas, composição editorial assimétrica, dark afetivo, glassmorphism, glow champagne e movimento suave para contar a história do casal sem aparência de landing page convencional.

## Stack

- React
- Vite
- TailwindCSS
- Framer Motion
- Lucide Icons
- Cormorant Garamond
- Manrope
- Playwright

## Como Rodar

Requisito: Node.js `>=22.12.0`.

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Otimizar novamente as imagens após trocar os PNGs originais:

```bash
npm run optimize:images
```

Validação responsiva:

```bash
npm run test:e2e
```

Prévia do build:

```bash
npm run preview
```

## Deploy na Vercel

O projeto já está preparado para Vercel com `vercel.json`.

Configuração esperada:

- Framework: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: `>=22.12.0`

Ao importar o repositório na Vercel, essas configurações devem ser detectadas automaticamente.

## Estrutura

```text
src/
├─ App.jsx
├─ data/
│  └─ weddingData.js
├─ components/
│  ├─ HeroSection.jsx
│  ├─ MessageSection.jsx
│  ├─ StorySection.jsx
│  ├─ PhotoSection.jsx
│  ├─ CeremonySection.jsx
│  ├─ InvitationSection.jsx
│  ├─ TimelineSection.jsx
│  ├─ LocationSection.jsx
│  ├─ FinalMessageSection.jsx
│  ├─ AtmosphereLayer.jsx
│  ├─ GlassCard.jsx
│  ├─ InvitationCard.jsx
│  ├─ LocationCard.jsx
│  ├─ PhotoCard.jsx
│  ├─ TimelineItem.jsx
│  ├─ Reveal.jsx
│  └─ SectionShell.jsx
└─ styles/
   └─ index.css
```

## Onde Editar Dados

Os dados principais ficam em `src/data/weddingData.js`.

Ali é possível trocar:

- nomes e data;
- textos das seções;
- caminhos das fotos;
- horários;
- locais;
- links do Google Maps.

As fotos usadas pelo layout ficam em `public/images/`:

- `/images/1.webp`
- `/images/2.webp`
- `/images/3.webp`

Os PNGs originais ficam em `assets/source-images/`. O script `npm run optimize:images` gera novamente os WebP públicos.

Os três botões de localização já apontam para o Google Maps e abrem em uma nova aba.

## Validação

Executado em 2026-06-14:

- `npm run build`
- `npm audit`
- `npm run test:e2e`

Resultado: build concluído, auditoria sem vulnerabilidades e testes aprovados em `390x844` e `1440x1000`.

A revisão visual também foi feita por screenshots completas do Playwright nos dois formatos.

## Observação de Performance

Os PNGs originais têm cerca de 2.1 MB cada. As versões WebP servidas pelo site têm aproximadamente 100 KB cada, e o build completo fica abaixo de 1 MB.

## Pendências

- Conectar ou atualizar o repositório na Vercel e publicar.
