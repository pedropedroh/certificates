const certificates = [
  {
    title:
      "React: arquitetando soluções de roteamento e gestão de estado com React Router e Context API",
    institution: "Alura",
    category: "React",
    date: "08/01/2026",
    hours: 8,
    image: "./assets/react/alura-react-router.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/d0923eb6-4f3b-4d3d-a06a-bf4b30331235",
  },
  {
    title: "Scrum: agilidade em seu projeto",
    institution: "Alura",
    category: "Scrum",
    date: "29/01/2026",
    hours: 10,
    image: "./assets/scrum/alura-scrum.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/e8e9f690-9686-4e8b-9e0d-0e79086f5a2f",
  },
  {
    title: "React: como os componentes funcionam",
    institution: "Alura",
    category: "React",
    date: "06/03/2025",
    hours: 8,
    image: "./assets/react/alura-components.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/813ceab2-495e-488d-9d78-2e2b18411db1",
  },
  {
    title:
      "React: estilize componentes com Styled Components e manipule arquivos estáticos",
    institution: "Alura",
    category: "React",
    date: "22/04/2025",
    hours: 8,
    image: "./assets/react/alura-styled-components.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/3012df0e-0b23-4a2f-b5b7-bdb45e1b76f0",
  },
  {
    title: "React: gerencie estados globalmente com Context API",
    institution: "Alura",
    category: "React",
    date: "23/06/2025",
    hours: 8,
    image: "./assets/react/alura-context.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/f74b7403-6be4-4efd-967f-c8b58fb8c32f",
  },
  {
    title: "React: praticando React com Js",
    institution: "Alura",
    category: "React",
    date: "17/09/2025",
    hours: 8,
    image: "./assets/react/alura-reactjs.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/215f296f-da1c-4839-8be6-21873e8f134e",
  },
  {
    title: "React: autenticando usuários",
    institution: "Alura",
    category: "React",
    date: "08/10/2025",
    hours: 8,
    image: "./assets/react/alura-auth.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/fcca8c0f-e497-4d51-af03-2708525aac66",
  },
  {
    title: "React: migrando para TypeScript",
    institution: "Alura",
    category: "React",
    date: "20/10/2025",
    hours: 8,
    image: "./assets/react/alura-ts.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/63d897ce-87fb-4b8b-b053-8cbb123a92c6",
  },
  {
    title: "React Native: Construindo um App com Native-base",
    institution: "Alura",
    category: "React Native",
    date: "09/11/2025",
    hours: 10,
    image: "./assets/react-native/alura-native-base.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/5db14243-db58-442c-a406-cad32b6cfea6",
  },
  {
    title: "Android parte 1: crie um app mobile",
    institution: "Alura",
    category: "Android",
    date: "15/12/2025",
    hours: 10,
    image: "./assets/android/alura-android.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/ce4421f1-ec4d-44e8-a88e-feed829590a8",
  },
  {
    title:
      "React: desenvolvendo componentes customizados e acessíveis com Emotion",
    institution: "Alura",
    category: "React",
    date: "07/01/2026",
    hours: 10,
    image: "./assets/react/alura-emotion.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/2cc0cea1-e056-4a69-a30d-746ad66adbba",
  },
  {
    title: "Scrum parte 4: planejando projetos com Agile",
    institution: "Alura",
    category: "Scrum",
    date: "02/02/2026",
    hours: 7,
    image: "./assets/scrum/alura-agile4.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/fa469d84-4648-40d9-877c-42024ccbbb8a",
  },
  {
    title: "Scrum parte 5: executando projetos com Agile",
    institution: "Alura",
    category: "Scrum",
    date: "08/02/2026",
    hours: 5,
    image: "./assets/scrum/alura-agile5.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/aad7418d-5ebd-47fb-9078-54ccc2d86998",
  },
  {
    title: "React: desenvolvendo com JavaScript",
    institution: "Alura",
    category: "React",
    date: "26/02/2026",
    hours: 14,
    image: "./assets/react/alura-js.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/7bb894c8-2da8-4a9d-bf84-c80f3d93855a",
  },
  {
    title:
      "React: migrando para o Vite e implementando autenticação baseada em Token",
    institution: "Alura",
    category: "React",
    date: "15/01/2026",
    hours: 10,
    image: "./assets/react/alura-vite.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/06284acb-cc42-4640-b7a2-df0dcf06cc2a",
  },
  {
    title: "Android parte 3: refinando o projeto",
    institution: "Alura",
    category: "Android",
    date: "27/01/2026",
    hours: 10,
    image: "./assets/android/alura-android3.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/2e00f581-8415-423f-abe7-42672b529ae3",
  },
  {
    title: "SOLID com Java: princípios da programação orientada a objetos",
    institution: "Alura",
    category: "SOLID",
    date: "17/03/2026",
    hours: 8,
    image: "./assets/solid/alura-solid.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/6b89eedb-1531-4c0f-9a0f-ec8434f6067f",
  },
  {
    title: "React: comece seu projeto full stack",
    institution: "Alura",
    category: "React",
    date: "25/03/2026",
    hours: 12,
    image: "./assets/react/alura-fullstack.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/9b636601-09c7-4530-b9cd-1575aa4afbfe",
  },
  {
    title:
      "Node.js: continue seu projeto full stack criando uma API com Express",
    institution: "Alura",
    category: "Node.js",
    date: "25/03/2026",
    hours: 8,
    image: "./assets/nodejs/alura-express.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/da7e42f8-5e4c-4d06-a00a-d64437ca7717",
  },
  {
    title: "React e Node.js: Consumindo APIs no React no projeto full stack",
    institution: "Alura",
    category: "Node.js",
    date: "31/03/2026",
    hours: 8,
    image: "./assets/nodejs/alura-apis.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/3a706873-59ec-45ec-ac3c-890483724b7c",
  },
  {
    title: "React: desenvolva aplicações tipadas e escaláveis com Typescript",
    institution: "Alura",
    category: "React",
    date: "01/04/2026",
    hours: 10,
    image: "./assets/react/alura-typescript.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/94caa00a-e953-487b-8294-66f97e9cd9fe",
  },
  {
    title: "React com Typescript: aplique Hooks e Context API tipados",
    institution: "Alura",
    category: "React",
    date: "01/04/2026",
    hours: 10,
    image: "./assets/react/alura-typescript.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/9e69dc09-9a92-4719-988e-eef41c9302ca",
  },
  {
    title: "React Native: desenvolvendo com Expo",
    institution: "Alura",
    category: "React Native",
    date: "07/04/2026",
    hours: 8,
    image: "./assets/react-native/alura-expo.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/a69873fb-dcae-4df6-aca6-b7231f67a444",
  },
  {
    title: "React Native: navegando entre telas com expo router",
    institution: "Alura",
    category: "React Native",
    date: "08/04/2026",
    hours: 10,
    image: "./assets/react-native/alura-expo.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/47accf0e-38f3-4597-b90a-6661462c258e",
  },
  {
    title: "React Native: explorando ferramentas de desenvolvimento",
    institution: "Alura",
    category: "React Native",
    date: "09/04/2026",
    hours: 8,
    image: "./assets/react-native/alura-tools.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/9acc4158-31ec-4d72-abfe-1676ffd58388",
  },
  {
    title: "React Native: praticando customizações",
    institution: "Alura",
    category: "React Native",
    date: "09/04/2026",
    hours: 4,
    image: "./assets/react-native/alura-customization.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/c456d972-e124-4b11-9199-6c9612167d38",
  },
  {
    title: "Android: construindo com Kotlin",
    institution: "Alura",
    category: "Android",
    date: "10/04/2026",
    hours: 12,
    image: "./assets/android/alura-kotlin.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/753d7ce7-8141-45ad-bcb4-1cac24cc2387",
  },
  {
    title: "Layouts Android parte 1: criando telas com Constraint Layouts",
    institution: "Alura",
    category: "Android",
    date: "14/04/2026",
    hours: 15,
    image: "./assets/android/alura-layout1.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/5a6fd225-f033-4b54-9106-c77dc129016a",
  },
  {
    title: "Android parte 2: avançando com listeners, menu e UI",
    institution: "Alura",
    category: "Android",
    date: "22/04/2026",
    hours: 10,
    image: "./assets/android/alura-listener.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/28fa7921-30e8-41be-9937-e1d6776c713c",
  },
  {
    title: "Layouts Android parte 2: boas práticas para criação de telas",
    institution: "Alura",
    category: "Android",
    date: "15/04/2026",
    hours: 17,
    image: "./assets/android/alura-layout2.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/5a4a25d6-32e6-4690-b018-42a397476074",
  },
  {
    title: "Recycler View parte 1: listas flexíveis e performáticas",
    institution: "Alura",
    category: "Android",
    date: "16/04/2026",
    hours: 8,
    image: "./assets/android/alura-recyclerview1.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/fdc1246a-45e2-4a63-b5e9-d574207258ae",
  },
  {
    title: "Recycler View parte 2: Listeners, animações e boas práticas",
    institution: "Alura",
    category: "Android",
    date: "17/04/2026",
    hours: 8,
    image: "./assets/android/alura-recyclerview2.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/a8123ba7-f845-427d-87b8-a7501a214188",
  },
  {
    title: "Android: acessando uma API Web",
    institution: "Alura",
    category: "Android",
    date: "19/04/2026",
    hours: 10,
    image: "./assets/android/alura-api.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/de267938-e457-41ef-9a2c-c2f94da68785",
  },
  {
    title: "Android Room parte 2: implementando operações assíncronas",
    institution: "Alura",
    category: "Android",
    date: "20/04/2026",
    hours: 10,
    image: "./assets/android/alura-room2.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/d9d9d1a2-1b09-4c7f-8ed9-88a1b5ffedfe",
  },
  {
    title: "Android Fragments: reutilizando componentes visuais",
    institution: "Alura",
    category: "Android",
    date: "21/04/2026",
    hours: 8,
    image: "./assets/android/alura-fragments.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/2f8f17ef-c026-43d7-8e9c-03b64393f321",
  },
  {
    title: "Navigation parte 1: transição de telas no Android",
    institution: "Alura",
    category: "Android",
    date: "22/04/2026",
    hours: 6,
    image: "./assets/android/alura-navigation1.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/6aedb7f2-0967-4eca-8fd8-55e7987f1e20",
  },
  {
    title: "Navigation parte 2: novas features e reutilização de código",
    institution: "Alura",
    category: "Android",
    date: "24/04/2026",
    hours: 12,
    image: "./assets/android/alura-navigation2.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/64292fed-5cd6-4c7c-8f63-02d1c5dc11fa",
  },
  {
    title: "React: consumindo APIs HTTP no seu projeto",
    institution: "Alura",
    category: "React",
    date: "27/04/2026",
    hours: 8,
    image: "./assets/react/alura-api.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/6c3ca274-9e89-4097-a51b-25afe2a4d7cb",
  },
  {
    title: "React: realizando testes avançados com Jest e Testing Library",
    institution: "Alura",
    category: "React",
    date: "18/05/2026",
    hours: 12,
    image: "./assets/react/alura-jest2.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/e9bfe0b7-0708-4fa8-aaf2-329e287c46ef",
  },
  {
    title: "React: escrevendo seus primeiros testes com Jest e Testing Library",
    institution: "Alura",
    category: "React",
    date: "16/05/2026",
    hours: 18,
    image: "./assets/react/alura-jest1.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/589176e3-2fe0-4264-9f33-79e190fd43ab",
  },
  {
    title:
      "React: eleve o nível de seus formulários com Zod e o React Hook Form",
    institution: "Alura",
    category: "React",
    date: "08/05/2026",
    hours: 8,
    image: "./assets/react/alura-zod.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/edf8ea9c-7569-4821-aae6-fabd7450ba68",
  },
  {
    title: "React: gerencie e valide formulários com o React Hook Form",
    institution: "Alura",
    category: "React",
    date: "06/05/2026",
    hours: 8,
    image: "./assets/react/alura-hookform.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/182c2e34-6a32-4e1e-8cd4-abcad19719a8",
  },
  {
    title: "React: praticando o consumo de APIs",
    institution: "Alura",
    category: "React",
    date: "27/04/2026",
    hours: 4,
    image: "./assets/react/alura-api2.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/db3553ca-1254-4709-8c0f-21b396229407",
  },
  {
    title: "React: técnicas avançadas de otimização e desempenho",
    institution: "Alura",
    category: "React",
    date: "22/05/2026",
    hours: 14,
    image: "./assets/react/alura-performance.png",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/f4caae39-ddd6-49ab-90e6-5cbec08831f5",
  },
];

const certificatesContainer = document.getElementById("certificates");

const sortedCertificates = [...certificates].sort((a, b) => {
  const [dayA, monthA, yearA] = a.date.split("/");
  const [dayB, monthB, yearB] = b.date.split("/");

  const dateA = new Date(yearA, monthA - 1, dayA);
  const dateB = new Date(yearB, monthB - 1, dayB);

  return dateB - dateA;
});

const categories = {};

sortedCertificates.forEach((certificate) => {
  if (!categories[certificate.category]) {
    categories[certificate.category] = [];
  }

  categories[certificate.category].push(certificate);
});

const totalHours = certificates.reduce(
  (total, certificate) => total + certificate.hours,
  0,
);
document.getElementById("total-hours").textContent =
  `${totalHours}h de cursos concluídos`;

const techIcons = {
  React: "devicon-react-original",
  "React Native": "devicon-react-original",
  Android: "devicon-android-plain",
  "Node.js": "devicon-nodejs-plain",
  Java: "devicon-java-plain",
};

Object.entries(categories).forEach(([category, categoryCertificates]) => {
  const categorySection = document.createElement("section");

  categorySection.className = "certificate-category";

  categorySection.innerHTML = `
    <h3>
      <span class="tech-badge">
        <i class="${techIcons[category]}"></i>
        ${category}
      </span>
      <span class="category-count">${categoryCertificates.length} cursos</span>
    </h3>

    <div class="certificates">
      ${categoryCertificates
        .map(
          (certificate) => `
            <article class="certificate">
              <div class="certificate-image">
                <img
                  src="${certificate.image}"
                  alt="${certificate.title}"
                />
              </div>

              <h4>${certificate.title}</h4>

              <span>${certificate.date} · ${certificate.hours}h</span>

              <a
                href="${certificate.verificationUrl}"
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate
              </a>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  certificatesContainer.appendChild(categorySection);
});
