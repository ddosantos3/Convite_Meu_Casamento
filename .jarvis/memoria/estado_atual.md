# Estado Atual

## Situação

Quarta versão conceitual do convite web de casamento de Douglas e Regiane implementada.

## Demanda mais recente

Usuário solicitou a aplicação integral de `prompt4.md`, preservando tudo que já funcionava, seguida de commit e atualização do repositório.

## Classificação

- Tipo: evolução visual e narrativa de landing page / convite web
- Público: pessoas próximas, recebendo o link pelo WhatsApp
- Prioridade absoluta: experiência mobile
- Domínio principal: frontend
- Agentes considerados: Jarvis, frontend_master, qa_master e seguranca_master

## Estado técnico

- `prompt4.md` incorporado ao projeto como referência da V4.
- V4 usa Cormorant Garamond nos títulos e Manrope nos textos.
- Background possui camadas atmosféricas vivas, grain, light leaks, escala e rotação lentas com Framer Motion.
- Mensagem especial e cerimônia funcionam como cenas fotográficas em tela cheia.
- História usa data em grande escala, blocos editoriais e marcos assimétricos.
- Fotos formam uma composição orgânica sobreposta no desktop e alternada no mobile.
- Convite, timeline e locais preservam clareza funcional com ritmos visuais distintos.
- Hero possui zoom cinematográfico lento e timeline acende os pontos em sequência.
- Fotos reais servidas como WebP de aproximadamente 100 KB cada.
- PNGs originais preservados em `assets/source-images/`.
- Build preparado para Vercel e abaixo de 1 MB.
- Os três botões de localização abrem os locais corretos no Google Maps em nova aba.

## Validação executada

- `npm run optimize:images`: aprovado.
- `npm run build`: aprovado.
- `npm audit`: sem vulnerabilidades.
- `npm run test:e2e`: 2 testes aprovados em mobile `390x844` e desktop `1440x1000`.
- Revisão visual realizada por screenshots Playwright.

## Próximo passo recomendado

Publicar a V4 na Vercel e conferir o movimento e os links em celulares reais antes do envio pelo WhatsApp.
