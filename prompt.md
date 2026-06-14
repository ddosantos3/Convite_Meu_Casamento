Jarvis, preciso que você desenvolva o primeiro esboço de um convite web de casamento para Douglas e Regiane.

Este convite será enviado pelo WhatsApp para pessoas próximas, então a prioridade absoluta é que a experiência seja perfeita no celular.

O site precisa ser bonito, moderno e emocional, mas sem parecer luxuoso demais. A cerimônia será simples, íntima e feita de coração. Quem receber o convite precisa sentir que foi lembrado com carinho, porque faz parte da nossa história.

Não quero textos genéricos, artificiais ou com cara de inteligência artificial. Quero um convite humano, simples, verdadeiro e com sentimento.

Use os textos abaixo exatamente como base para cada seção. Pode ajustar apenas quebras de linha e pequenos detalhes de espaçamento para melhorar a leitura no layout, mas não mude o sentido da mensagem.

---

# Identidade do convite

Casal:

Douglas & Regiane

Data:

12/09

Estilo visual:

* Dark elegante
* Preto suave
* Cinza grafite
* Cinza médio
* Branco suave
* Transparência
* Glassmorphism
* Glowmorphism discreto
* Motion suave
* Visual íntimo, moderno e emocional
* Nada exagerado
* Nada com aparência de festa luxuosa
* Nada com aparência comercial

O sentimento principal do site deve ser:

“Esse convite chegou até você porque você é especial para nós.”

---

# Stack recomendada

Desenvolva com:

* React ou Next.js
* TailwindCSS
* Framer Motion
* Lucide Icons
* Mobile-first
* Componentização limpa
* Código fácil de editar
* Dados centralizados em um objeto/configuração

Crie componentes reutilizáveis, como:

* HeroSection
* MessageSection
* StorySection
* PhotoSection
* CeremonySection
* TimelineSection
* LocationSection
* FinalMessageSection
* GlassCard
* TimelineItem
* LocationCard
* PhotoCard

Centralize os dados principais em uma constante, por exemplo:

```js
const weddingData = {
  couple: "Douglas & Regiane",
  date: "12/09",
  storyStart: "12/05/2020",
  civil: {
    time: "09:00",
    location: "Cartório Parra",
    mapUrl: "#",
  },
  religious: {
    time: "11:00",
    location: "Paróquia Sagrado Coração de Jesus",
    mapUrl: "#",
  },
  celebration: {
    time: "Após o casamento religioso",
    location: "Chácara do Vô Luizão",
    mapUrl: "#",
    description: "Churrasco simples, conversa boa e pessoas especiais por perto.",
  },
  photos: [
    "/images/foto-1.jpg",
    "/images/foto-2.jpg",
    "/images/foto-3.jpg",
  ],
};
```

Adicione comentários no código indicando onde trocar fotos e links dos mapas depois.

---

# Regras importantes

Não criar:

* Botão de WhatsApp
* Formulário de confirmação de presença
* Opção “confirmo minha presença”
* Opção “não poderei comparecer”
* Campo de quantidade de pessoas
* RSVP
* Layout de festa grande
* Excesso de brilho
* Excesso de animação
* Textos frios, genéricos ou artificiais

Criar:

* Landing page completa
* Visual responsivo
* Mobile-first
* Fotos sutis
* Textos humanos
* Motion leve
* Leitura confortável no celular
* Cards elegantes
* Seções bem separadas
* Boa hierarquia visual
* Carregamento leve

---

# Prioridade mobile

A maioria das pessoas vai abrir esse convite pelo celular, vindo de um link enviado no WhatsApp.

Por isso, a experiência mobile precisa ser prioridade.

Regras obrigatórias:

* Layout pensado primeiro para celular
* Textos com boa leitura em tela pequena
* Parágrafos curtos
* Espaçamento confortável
* Cards empilhados verticalmente no mobile
* Fotos otimizadas
* Animações leves
* Nada que trave o carregamento
* Botões e links com área de toque confortável
* Contraste forte entre texto e fundo
* Não deixar a página pesada
* Não criar blocos longos demais de texto
* Desktop pode ser bonito, mas mobile precisa ser impecável

---

# Estrutura da página

## 1. Hero / Abertura

Objetivo:

Criar uma primeira tela emocional, bonita e direta.

Elementos:

* Nome do casal
* Data
* Frase principal
* Fundo dark com textura sutil
* Glow leve atrás dos nomes
* Motion de entrada suave
* Visual limpo e íntimo

Texto da seção:

Douglas & Regiane

12/09

Uma cerimônia simples, feita de todo coração, para pessoas que fazem parte da nossa história.

Detalhes visuais:

* Nome do casal em destaque
* Tipografia elegante, mas legível no celular
* Fundo escuro com ruído muito sutil
* Glow discreto em champagne, prata ou branco suave
* Não exagerar no brilho
* Não usar elementos muito chamativos

---

## 2. Mensagem especial ao convidado

Objetivo:

Explicar que a pessoa recebeu o convite porque é importante para nós.

Título da seção:

Para alguém especial

Texto da seção:

Este convite chegou até você porque sua presença tem valor em nossa vida.

Nossa cerimônia será simples, íntima e feita de todo coração. Queremos viver esse momento ao lado de pessoas que, de alguma forma, fazem parte da nossa caminhada.

Será uma alegria ter você conosco nesse dia tão especial.

Detalhes visuais:

* Usar um card com vidro/transparência
* Borda suave
* Glow discreto
* Texto centralizado ou levemente alinhado à esquerda no mobile
* Boa leitura no celular

---

## 3. Nossa história

Objetivo:

Contar de forma simples e verdadeira o início da nossa caminhada.

Título da seção:

Nossa história

Texto da seção:

Nossa história começou em 12/05/2020.

Desde então, fomos construindo uma caminhada feita de amor, parceria, aprendizados e escolhas. Entre os dias simples, os desafios vencidos e os sonhos que fomos criando juntos, entendemos que o amor também mora nos detalhes, na presença, no cuidado e na vontade de seguir lado a lado.

Com Ravi e Maria Eduarda, essa história se tornou ainda mais completa. Eles fazem parte do que somos, do que vivemos e do que sonhamos como família.

Agora, damos mais um passo importante: celebrar a nossa união diante de Deus, da nossa família e das pessoas que realmente fazem parte da nossa vida.

Detalhes visuais:

* Texto dividido em parágrafos curtos
* Evitar bloco pesado
* Pode usar uma mini timeline com três pontos:

  * O começo
  * A nossa família
  * O nosso sim
* Motion suave no scroll
* Não inventar detalhes além do texto acima

---

## 4. Fotos

Objetivo:

Criar um espaço sutil para até 3 fotos do casal/família.

Título da seção:

Alguns pedaços da nossa história

Texto curto da seção:

Pequenos registros de uma caminhada que seguimos construindo com amor, cuidado e presença.

Regras para fotos:

* Máximo de 3 fotos
* Usar os caminhos:

  * /images/foto-1.jpg
  * /images/foto-2.jpg
  * /images/foto-3.jpg
* As fotos não devem dominar o site
* Elas precisam aparecer de forma sutil
* Aplicar bordas arredondadas
* Usar cards leves
* Pode aplicar filtro levemente escuro/cinza para harmonizar com o tema
* No hover, pode aumentar um pouco a luz/nitidez
* No mobile, exibir uma abaixo da outra
* No desktop, pode exibir em linha ou em uma composição assimétrica elegante
* Adicionar comentários no código indicando onde trocar as imagens

---

## 5. Sobre a cerimônia

Objetivo:

Explicar que será algo íntimo, simples e feito de coração.

Título da seção:

Sobre a cerimônia

Texto da seção:

Nosso casamento será uma cerimônia íntima, simples e muito especial.

Escolhemos viver esse momento ao lado das pessoas mais próximas, aquelas que de alguma forma fazem parte da nossa caminhada e da nossa história.

Não estamos preparando uma grande festa. Estamos preparando um dia verdadeiro, feito com carinho, fé e todo o nosso coração, para que possamos aproveitar cada instante com quem realmente importa para nós.

Detalhes visuais:

* Usar card elegante com transparência
* Pode ter ícone discreto de coração, aliança ou igreja
* Visual sereno, sem exagero
* Texto com bastante respiro

---

## 6. Convite oficial

Objetivo:

Convidar formalmente, mas mantendo tom humano e íntimo.

Título da seção:

O nosso convite

Texto da seção:

Com alegria e gratidão, convidamos você para celebrar conosco o dia em que diremos o nosso sim.

Será um momento simples, mas cheio de significado. E a sua presença tornará esse dia ainda mais especial para nós.

Informações que devem aparecer em cards:

Casamento Civil
09:00
Cartório Parra

Casamento Religioso
11:00
Paróquia Sagrado Coração de Jesus

Comemoração
Após o casamento religioso
Churrasco na chácara do Vô Luizão

Detalhes visuais:

* Criar 3 cards separados
* Usar ícones minimalistas
* Relógio para horário
* Localização para local
* Igreja ou coração para cerimônia
* Churrasco/comemoração pode ser representado com ícone simples e elegante
* No mobile, empilhar os cards verticalmente

---

## 7. Linha do tempo do dia

Objetivo:

Mostrar a programação de forma clara para quem abrir pelo celular.

Título da seção:

Como será o dia

Itens da timeline:

09:00
Casamento Civil
Cartório Parra

11:00
Casamento Religioso
Paróquia Sagrado Coração de Jesus

Após a cerimônia religiosa
Saída para a chácara
Churrasco na chácara do Vô Luizão

Detalhes visuais:

* Timeline vertical no mobile
* Linha fina
* Pontos com glow discreto
* Textos objetivos
* Boa legibilidade
* Não criar timeline poluída

---

## 8. Locais

Objetivo:

Separar os locais do dia de forma prática.

Título da seção:

Locais

Cards:

Cartório Parra
Casamento Civil às 09:00

Paróquia Sagrado Coração de Jesus
Casamento Religioso às 11:00

Chácara do Vô Luizão
Comemoração após o casamento religioso, com churrasco, carinho e pessoas especiais por perto.

Pode criar botão discreto “Ver localização” em cada card, mas deixar o link como href="#" por enquanto.

Adicionar comentário no código:

“Substituir o href pelo link correto do Google Maps.”

Detalhes visuais:

* Cards simples
* Ícones discretos
* Texto claro
* Botões pequenos e elegantes
* No mobile, cards empilhados

---

## 9. Contamos com sua presença

Objetivo:

Reforçar que a presença da pessoa é importante.

Título da seção:

Contamos com sua presença

Texto da seção:

Será uma alegria imensa ter você conosco nesse dia.

Sua presença tornará esse momento ainda mais especial, porque este convite não foi enviado por acaso. Ele chegou até você porque, de alguma forma, você faz parte da nossa história e queremos dividir essa alegria com você.

Esperamos você para celebrar conosco esse novo capítulo das nossas vidas.

Detalhes visuais:

* Seção emocional
* Card centralizado
* Fundo escuro
* Glow bem suave
* Não criar botão de confirmação

---

## 10. Mensagem final

Objetivo:

Encerrar o convite com simplicidade, carinho e emoção.

Texto da seção:

Não estamos preparando uma grande festa.

Estamos preparando um momento verdadeiro.

E ter você conosco tornará esse dia ainda mais especial.

Com carinho,
Douglas & Regiane

Detalhes visuais:

* Fundo mais escuro
* Nome do casal em destaque
* Glow sutil
* Encerramento limpo
* Sem botões extras
* Sem excesso visual

---

# Direção de design detalhada

Use uma estética dark elegante, com cards translúcidos e brilho sutil.

Sugestões visuais:

* Fundo preto/cinza com gradientes suaves
* Efeitos de blur no fundo
* Cards com background rgba
* Backdrop blur
* Bordas com rgba branco bem sutil
* Sombras suaves
* Glow controlado
* Divisórias discretas entre seções
* Scroll reveal com Framer Motion
* Animações lentas e suaves
* Nada piscando
* Nada chamativo demais

A página deve parecer:

* Íntima
* Familiar
* Moderna
* Elegante
* Simples
* Verdadeira
* Feita com carinho

A página não deve parecer:

* Luxuosa demais
* Artificial
* Comercial
* Genérica
* Exagerada
* Poluída
* Pesada

---

# Resultado esperado

Entregar o primeiro esboço funcional do convite web contendo:

* Hero
* Mensagem especial ao convidado
* Nossa história
* Área sutil para até 3 fotos
* Sobre a cerimônia
* Convite oficial
* Linha do tempo do dia
* Locais
* Contamos com sua presença
* Mensagem final

Tudo precisa estar responsivo, especialmente para celular.

A experiência esperada é:

A pessoa recebe o link pelo WhatsApp, abre no celular, lê com facilidade, sente o carinho do convite, entende os horários e locais, percebe que foi chamada porque é especial e termina a página sentindo que faz parte desse momento.

Prioridade máxima:

Criar algo bonito, humano, simples e verdadeiro.

A essência do convite é:

Douglas e Regiane estão celebrando uma história que começou em 12/05/2020, se fortaleceu com Ravi e Maria Eduarda, e agora chega a um novo capítulo: o casamento, vivido de forma íntima, com fé, carinho e pessoas realmente especiais por perto.
