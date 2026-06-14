# Resumo Executivo

O projeto contém a identidade visual final do convite web de Douglas e Regiane,
com foco mobile-first para compartilhamento por WhatsApp.

A otimização mais recente preservou as cenas fotográficas e a composição
editorial, mas removeu parallax, filtros animados, camadas fixas e Framer Motion
do runtime. Reveals usam IntersectionObserver e CSS.

As fotos são servidas em WebP responsivo: variantes de 900 px no mobile e 1200
px no desktop. Os PNGs originais permanecem em `assets/source-images/`.

O bundle JavaScript caiu de 340 KB para 214 KB. No perfil mobile, a transferência
caiu de 527 KB para 344 KB e os quadros acima de 34 ms caíram de 30 para zero.

Não há RSVP, formulário, botão de WhatsApp ou coleta de dados. Os três botões de
localização apontam para o Google Maps.

Validações de 2026-06-14: build aprovado, audit limpo, Playwright aprovado em
mobile e desktop e screenshots revisadas.
