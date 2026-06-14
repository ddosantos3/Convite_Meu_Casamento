# Mapa de Arquitetura

## Visão geral

Aplicação frontend estática com React e Vite.

## Estrutura principal

```text
.
├─ AGENTS.md
├─ README.md
├─ prompt.md
├─ prompt2.md
├─ package.json
├─ vercel.json
├─ .nvmrc
├─ index.html
├─ public/
│  └─ images/
│     ├─ 1.png
│     ├─ 2.png
│     └─ 3.png
└─ src/
   ├─ App.jsx
   ├─ main.jsx
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
   │  ├─ PresenceSection.jsx
   │  ├─ FinalMessageSection.jsx
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

## Fluxo de dados

`src/data/weddingData.js` concentra os textos, horários, locais, links e fotos. `App.jsx` distribui esses dados para as seções.

## Superfície de risco

Baixa: site estático sem backend e sem coleta de dados. Os únicos links externos planejados são os mapas.
