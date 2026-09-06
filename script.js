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

Object.entries(categories).forEach(([category, categoryCertificates]) => {
  const categorySection = document.createElement("section");

  categorySection.className = "certificate-category";

  categorySection.innerHTML = `
    <h3>${category}</h3>

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

              <p>${certificate.institution}</p>

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
