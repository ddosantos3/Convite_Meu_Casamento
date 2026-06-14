# Resumo Executivo

O projeto contém a V4 conceitual do convite web de Douglas e Regiane, criada a partir de `prompt4.md` com o conceito "Uma memória em movimento".

A experiência rompe a repetição de título, texto e card por meio de cenas fotográficas, datas monumentais, blocos editoriais assimétricos e uma colagem orgânica de fotos. Hero, fundos, reveals, timeline, cards e links usam motion sutil com respeito a `prefers-reduced-motion`.

As três fotos são servidas em WebP com cerca de 100 KB cada. Os PNGs originais permanecem em `assets/source-images/` e podem ser reprocessados com `npm run optimize:images`.

Não há RSVP, formulário, botão de WhatsApp ou coleta de dados. Os três botões de localização apontam para o Google Maps.

Validações de 2026-06-14: build aprovado, audit limpo e Playwright aprovado em mobile e desktop.
