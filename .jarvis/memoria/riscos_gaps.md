# Riscos e Gaps

## Riscos atuais

- Os botões de localização ainda usam `href="#"`.
- A validação automatizada cobre Chrome em mobile e desktop, mas não substitui a conferência final em aparelhos reais.
- A URL pública final da Vercel ainda precisa ser confirmada.

## Segurança e privacidade

- O site não coleta dados pessoais.
- Não há formulário, RSVP, confirmação de presença, botão de WhatsApp ou integração externa ativa.
- Links externos de mapa devem ser conferidos antes da publicação.

## Mitigações

- Manter dados editáveis em `src/data/weddingData.js`.
- Rodar `npm run build`, `npm audit` e `npm run test:e2e` após mudanças.
- Regerar WebP com `npm run optimize:images` ao trocar as fotos.
- Revisar visualmente em celular real antes de compartilhar.
