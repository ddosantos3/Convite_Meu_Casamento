# AGENTS.md Local - Projeto Convite

## Regra principal

Jarvis coordena qualquer demanda neste projeto, mantendo memória operacional e validação mínima antes de considerar uma entrega pronta.

## Estado atual

O projeto possui uma segunda versão funcional do convite web de casamento de Douglas e Regiane, com visual mais emocional, fotos reais e motion suave.

## Classificação da entrega

- Tipo: landing page / convite web
- Prioridade: mobile-first para envio por WhatsApp
- Stack: React, Vite, TailwindCSS, Framer Motion e Lucide Icons
- Sem backend, formulário, RSVP, botão de WhatsApp ou coleta de dados

## Fluxo local

1. Ler `.jarvis/memoria` antes de alterar o projeto.
2. Conferir `prompt.md` quando a demanda envolver escopo do convite.
3. Manter `src/data/weddingData.js` como fonte central dos dados editáveis.
4. Atualizar memória após mudanças relevantes.
5. Manter README coerente com o estado real.
6. Registrar riscos e pendências quando houver decisão aberta.
7. Validar com `npm run build` e, quando houver dependências novas, `npm audit`.
8. Sugerir commit semântico ao final de uma entrega.

## Agentes aplicáveis

- Jarvis: coordenação geral, priorização e consolidação.
- frontend_master: layout, responsividade, motion e experiência visual.
- qa_master: build, responsividade e regressão visual básica.
- seguranca_master: privacidade, ausência de coleta indevida e revisão de links externos.
- observabilidade_master: não aplicável enquanto for site estático sem backend.
- backend_architect: não aplicável enquanto não houver APIs ou persistência.

## Regras do convite

- Não criar RSVP, confirmação de presença, formulário, botão de WhatsApp ou campo de quantidade de pessoas.
- Priorizar leitura confortável em telas pequenas.
- Preservar tom humano, simples, íntimo e emocional.
- Manter brilho e animações discretos.
- Trocar os links `#` dos mapas antes de publicar.
