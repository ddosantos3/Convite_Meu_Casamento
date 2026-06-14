# Riscos e Gaps

## Riscos atuais

- Links de localização ainda estão como `#`, então os botões "Ver localização" não levam ao Google Maps.
- As imagens reais estão em PNG com cerca de 2.1 MB cada; a galeria usa lazy loading, mas a publicação final deve usar WebP/JPG otimizado.
- Ainda não há validação em celular real; a implementação é mobile-first e o build passou, mas o envio por WhatsApp merece conferência no aparelho final.
- Não há decisão de hospedagem/publicação.

## Segurança e privacidade

- O site não coleta dados pessoais.
- Não há formulário, RSVP, confirmação de presença, botão de WhatsApp ou integração externa ativa.
- Links externos de mapa devem ser conferidos antes da publicação para evitar URLs incorretas.

## Mitigações

- Manter dados editáveis em `src/data/weddingData.js`.
- Trocar todos os `mapUrl` antes do go-live.
- Otimizar imagens antes de publicar.
- Rodar `npm run build` após qualquer alteração.
- Revisar visualmente em mobile antes de compartilhar o link.
