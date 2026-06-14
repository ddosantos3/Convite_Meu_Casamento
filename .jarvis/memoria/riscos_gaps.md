# Riscos e Gaps

## Riscos atuais

- A validação automatizada cobre Chrome em mobile e desktop, mas não substitui a conferência final em aparelhos reais.
- Parallax, blur e backdrop-filter podem variar em aparelhos móveis mais antigos; `prefers-reduced-motion` reduz as animações, mas a conferência física continua recomendada.
- As partículas usam apenas nove elementos pequenos e transformações leves; ainda assim, aparelhos muito antigos podem reduzir a suavidade do movimento.
- A URL pública final da Vercel ainda precisa ser confirmada.

## Segurança e privacidade

- O site não coleta dados pessoais.
- Não há formulário, RSVP, confirmação de presença, botão de WhatsApp ou integração externa ativa.
- Links externos de mapa usam nova aba com `noopener noreferrer`.

## Mitigações

- Manter dados editáveis em `src/data/weddingData.js`.
- Rodar `npm run build`, `npm audit` e `npm run test:e2e` após mudanças.
- Regerar WebP com `npm run optimize:images` ao trocar as fotos.
- Revisar visualmente em celular real antes de compartilhar.
