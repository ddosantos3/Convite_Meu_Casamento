const mapUrls = {
  civil:
    "https://www.google.com/maps/place/Oficial+de+Registro+Civil+das+Pessoas+Naturais+e+de+Interdi%C3%A7%C3%B5es+e+Tutelas+-+Nome+de+Fantasia:+Parra+Registros+e+Servi%C3%A7os/@-22.2199747,-49.9485748,17z/data=!3m1!4b1!4m6!3m5!1s0x94bfd737dfd7d88b:0x28c81d3148d3dd2!8m2!3d-22.2199747!4d-49.9459999!16s%2Fg%2F11b6gkpj1b?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
  religious:
    "https://www.google.com/maps?sca_esv=19cdb9ead32b966e&rlz=1C1SQJL_pt-BRBR1203BR1203&output=search&q=sagrado+cora%C3%A7%C3%A3o+de+jesus+igreja+marilia&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRiigBgL2I_pgQa-94zvB054Dys3s2x_Qm_GJcU2DlSXjGaRWzFR_7WR9-t6Fsc53GhxhYXsXrBYHNKryQwb7UeekEx_ocTbopQoLxwKIBpAogHU5k4Hwqrf8VXUIm8U9PyCFNlK7vj97jTyecqw-SYiYZJ2K_vz6ci8gEhcXDm9yT6NHdaU4U2onh2LCOtxj0DSX-wg&entry=mc&ved=1t:200715&ictx=111",
  celebration:
    "https://www.google.com/maps/place/Est%C3%A2ncias+Ip%C3%AAs+e+Pinhais/@-22.1065308,-49.9039638,847m/data=!3m1!1e3!4m6!3m5!1s0x94bfd32457d78efd:0x641a3c66d83ff1fd!8m2!3d-22.1054713!4d-49.9067162!16s%2Fg%2F11l9fhzrsq?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
};

export const weddingData = {
  couple: "Douglas & Regiane",
  date: "12/09",
  storyStart: "12/05/2020",
  hero: {
    image: "/images/2.webp",
    message:
      "Uma cerimônia simples, feita de todo coração, para pessoas que fazem parte da nossa história.",
  },
  specialMessage: {
    id: "para-alguem-especial",
    eyebrow: "Você faz parte disso",
    title: "Para alguém especial",
    image: "/images/1.webp",
    paragraphs: [
      "Este convite chegou até você porque sua presença tem valor em nossa vida.",
      "Nossa cerimônia será simples, íntima e feita de todo coração. Queremos viver esse momento ao lado de pessoas que, de alguma forma, fazem parte da nossa caminhada.",
      "Será uma alegria ter você conosco nesse dia tão especial.",
    ],
  },
  story: {
    id: "nossa-historia",
    eyebrow: "Nossa história",
    title: "Desde 12/05/2020",
    paragraphs: [
      "Nossa história começou em 12/05/2020.",
      "Desde então, fomos construindo uma caminhada feita de amor, parceria, aprendizados e escolhas. Entre os dias simples, os desafios vencidos e os sonhos que fomos criando juntos, entendemos que o amor também mora nos detalhes, na presença, no cuidado e na vontade de seguir lado a lado.",
      "Com Ravi e Maria Eduarda, essa história se tornou ainda mais completa. Eles fazem parte do que somos, do que vivemos e do que sonhamos como família.",
      "Agora, damos mais um passo importante: celebrar a nossa união diante de Deus, da nossa família e das pessoas que realmente fazem parte da nossa vida.",
    ],
    milestones: [
      {
        title: "O começo",
        detail: "12/05/2020",
      },
      {
        title: "Ravi e Maria Eduarda",
        detail: "A nossa família",
      },
      {
        title: "O nosso sim",
        detail: "Um novo capítulo",
      },
    ],
  },
  photos: {
    id: "fotos",
    eyebrow: "Memórias",
    title: "Alguns pedaços da nossa história",
    intro:
      "Pequenos registros de uma caminhada que seguimos construindo com amor, cuidado e presença.",
    items: [
      {
        // Trocar por outra foto real do casal ou da família, se necessário.
        src: "/images/1.webp",
        alt: "Foto 1 de Douglas e Regiane",
      },
      {
        // Trocar por outra foto real do casal ou da família, se necessário.
        src: "/images/2.webp",
        alt: "Foto 2 de Douglas e Regiane",
      },
      {
        // Trocar por outra foto real do casal ou da família, se necessário.
        src: "/images/3.webp",
        alt: "Foto 3 de Douglas e Regiane",
      },
    ],
  },
  ceremony: {
    id: "sobre-a-cerimonia",
    eyebrow: "Sobre a cerimônia",
    title: "Um momento íntimo",
    image: "/images/3.webp",
    paragraphs: [
      "Nosso casamento será uma cerimônia íntima, simples e muito especial.",
      "Escolhemos viver esse momento ao lado das pessoas mais próximas, aquelas que de alguma forma fazem parte da nossa caminhada e da nossa história.",
      "Não estamos preparando uma grande festa. Estamos preparando um dia verdadeiro, feito com carinho, fé e todo o nosso coração, para que possamos aproveitar cada instante com quem realmente importa para nós.",
    ],
  },
  invitation: {
    id: "o-nosso-convite",
    eyebrow: "O nosso convite",
    title: "O dia do nosso sim",
    paragraphs: [
      "Com alegria e gratidão, convidamos você para celebrar conosco o dia em que diremos o nosso sim.",
      "Será um momento simples, mas cheio de significado. E a sua presença tornará esse dia ainda mais especial para nós.",
    ],
  },
  civil: {
    title: "Casamento Civil",
    label: "Casamento Civil",
    time: "09:00",
    location: "Cartório Parra",
    mapUrl: mapUrls.civil,
  },
  religious: {
    title: "Casamento Religioso",
    label: "Casamento Religioso",
    time: "11:00",
    location: "Paróquia Sagrado Coração de Jesus",
    mapUrl: mapUrls.religious,
  },
  celebration: {
    title: "Comemoração",
    label: "Comemoração",
    time: "Após o casamento religioso",
    location: "Churrasco na chácara do Vô Luizão",
    mapUrl: mapUrls.celebration,
    description:
      "Comemoração após o casamento religioso, com churrasco, carinho e pessoas especiais por perto.",
  },
  dayTimeline: {
    id: "como-sera-o-dia",
    eyebrow: "Roteiro do dia",
    title: "Como será o dia",
    items: [
      {
        time: "09:00",
        title: "Casamento Civil",
        place: "Cartório Parra",
      },
      {
        time: "11:00",
        title: "Casamento Religioso",
        place: "Paróquia Sagrado Coração de Jesus",
      },
      {
        time: "Após a cerimônia religiosa",
        title: "Saída para a chácara",
        place: "Churrasco na chácara do Vô Luizão",
      },
    ],
  },
  locations: {
    id: "locais",
    eyebrow: "Onde estaremos",
    title: "Locais",
    cards: [
      {
        type: "civil",
        name: "Cartório Parra",
        microcopy: "Onde damos o primeiro passo oficial desse dia.",
        description: "Casamento Civil às 09:00.",
        mapUrl: mapUrls.civil,
      },
      {
        type: "religious",
        name: "Paróquia Sagrado Coração de Jesus",
        microcopy: "Onde celebraremos nossa união diante de Deus.",
        description: "Casamento Religioso às 11:00.",
        mapUrl: mapUrls.religious,
      },
      {
        type: "celebration",
        name: "Chácara do Vô Luizão",
        microcopy: "Depois da cerimônia, seguimos para comemorar de um jeito simples, leve e nosso.",
        description: "Comemoração após o casamento religioso.",
        mapUrl: mapUrls.celebration,
      },
    ],
  },
  finalMessage: {
    id: "mensagem-final",
    title: "Com carinho",
    image: "/images/3.webp",
    paragraphs: [
      "Não estamos preparando uma grande festa.",
      "Estamos preparando um momento verdadeiro.",
      "E ter você conosco tornará esse dia ainda mais especial.",
      "Com carinho,",
    ],
  },
};
