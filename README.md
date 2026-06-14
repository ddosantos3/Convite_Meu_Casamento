# Convite Douglas & Regiane

Segunda versão funcional de um convite web de casamento para Douglas e Regiane.

O projeto foi criado para ser enviado por WhatsApp e aberto principalmente no celular. A experiência prioriza leitura confortável, estética dark acolhedora, fotos reais, cards translúcidos, glow champagne, motion suave e tom humano, simples e íntimo.

## Stack

- React
- Vite
- TailwindCSS
- Framer Motion
- Lucide Icons

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

- `/images/1.png`
- `/images/2.png`
- `/images/3.png`

Os links dos mapas estão como `#` por enquanto. Substituir cada `mapUrl` pelo link correto do Google Maps antes de publicar.

## Validação

Executado em 2026-06-14:

- `npm run build`
- `npm audit`

Resultado: build concluído e auditoria sem vulnerabilidades.

## Observação de Performance

As imagens reais estão em PNG e têm cerca de 2.1 MB cada. A galeria usa lazy loading, mas antes da publicação final é recomendável gerar versões WebP/JPG otimizadas.

## Pendências

- Substituir `mapUrl: "#"` pelos links reais dos locais.
- Revisar e otimizar as fotos finais antes da publicação.
- Conectar o repositório na Vercel e publicar.
