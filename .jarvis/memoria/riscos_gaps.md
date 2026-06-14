# Riscos e Gaps

## Riscos atuais

- A medição local não inclui latência real da região e conexão do visitante.
- A URL pública final da Vercel ainda precisa ser medida.
- O cache de `/images/*` dura um dia; clientes recorrentes podem manter uma foto
  anterior nesse período após uma troca.
- Chrome automatizado não substitui a conferência em aparelhos físicos antigos.

## Segurança e privacidade

- O site não coleta dados pessoais.
- Não há formulário, RSVP ou integração ativa.
- Links do Google Maps usam `noopener noreferrer`.

## Mitigações

- Rodar `npm run profile:runtime -- <url-publica>` depois do deploy.
- Conferir `content-encoding`, `cache-control`, `x-vercel-cache` e `age`.
- Regerar WebP com `npm run optimize:images` ao trocar as fotos.
- Revisar visualmente em celular real antes de compartilhar.
