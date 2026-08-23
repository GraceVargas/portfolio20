import {
    mobile,
    backend,
    creator,
    web,
    alot,
    mater_dei,
    dimec,
    notes,
    fixo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Nav_About",
    },
    {
      id: "work",
      title: "Nav_Work",
    },
    {
      id: "contact",
      title: "Nav_Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Human Resources",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      title: "Systems",
      skills: [
        "APIs REST",
        "Manejo de estado",
        "Autenticación",
        "Validación de formularios",
        "Diseño responsive",
        "Integraciones de terceros",
      ],
    },
    {
      title: "Stack & Delivery",
      skills: [
        "Node.js",
        "Express.js",
        "SQL",
        "AWS",
        "Cloudflare",
        "Vercel",
        "GitHub",
      ],
    },
  ];
  
  const experiences = [
    {
      title: "Exp_1_title",
      company_name: "Officenet S.A.",
      icon: alot,
      iconBg: "#E6DEDD",
      date: "Exp_1_date",
      points: [
        "Exp_1_point_1",
        "Exp_1_point_2",
        "Exp_1_point_3",
        "Exp_1_point_4",
        "Exp_1_point_5",
        "Exp_1_point_6"
      ],
    },
    {
      title: "Exp_2_title",
      company_name: "Officenet S.A.",
      icon: alot,
      iconBg: "#E6DEDD",
      date: "Exp_2_date",
      points: [
          "Exp_2_point_1",
          "Exp_2_point_2"
      ],
    },
    {
      title: "Exp_3_title",
      company_name: "Mater Dei",
      icon: mater_dei,
      iconBg: "#383E56",
      date: "Exp_3_date",
      points: [
        "Exp_3_point_1" 
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Droguería DIMEC",
      description:
        "Project_1_desc",
      tags: [
        {
          name: "next js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "AWS Amplify",
          color: "pink-text-gradient",
        },
      ],
      image: dimec,
      deploy_link: "https://www.drogueriadimec.com.ar/",
    },
    {
      name: "The Note App",
      description:
        "Project_2_desc",
      tags: [
          {
          name: "nest js",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "next js",
          color: "red-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        }
      ],
      image: notes,
      source_code_link: "https://github.com/GraceVargas/Notes-app"
    },
    {
      name: "Fixo Electrónica",
      description:
        "Project_3_desc",
      tags: [
        {
          name: "next js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "cloudflare",
          color: "green-text-gradient",
        }
      ],
      image: fixo,
      deploy_link: "https://fixocomputacion.com.ar/",
    },
  ];
  
  export { services, experiences, projects, skillCategories };