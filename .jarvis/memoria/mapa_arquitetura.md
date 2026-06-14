# Mapa de Arquitetura

## Visão geral

Aplicação frontend estática com React e Vite, preparada para Vercel.

## Estrutura principal

```text
.
├─ assets/source-images/       # PNGs originais
├─ public/images/              # WebP servidos pelo site
├─ scripts/
│  └─ optimize-images.mjs
├─ tests/
│  └─ invitation.spec.js
├─ src/
│  ├─ data/weddingData.js
│  ├─ components/
│  │  ├─ AtmosphereLayer.jsx
│  │  ├─ HeroSection.jsx
│  │  ├─ MessageSection.jsx
│  │  ├─ StorySection.jsx
│  │  ├─ PhotoSection.jsx
│  │  ├─ CeremonySection.jsx
│  │  ├─ InvitationSection.jsx
│  │  ├─ TimelineSection.jsx
│  │  ├─ LocationSection.jsx
│  │  └─ FinalMessageSection.jsx
│  └─ styles/index.css
├─ playwright.config.js
├─ vercel.json
├─ prompt.md
├─ prompt2.md
└─ prompt3.md
```

## Fluxo de dados

`weddingData.js` fornece textos, horários, locais, links e caminhos de imagens aos componentes.

## Pipeline de mídia

`assets/source-images/*.png` → `npm run optimize:images` → `public/images/*.webp`.

## Superfície de risco

Baixa: site estático, sem backend e sem coleta de dados.
