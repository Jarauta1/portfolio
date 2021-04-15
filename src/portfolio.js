/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
 /*  googleTrackingID: "UA-174238252-2", */
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Diego J.",
  logo_name: "diego.j()",
  nickname: "Diego / picleric",
  full_name: "Diego Jarauta",
  subTitle:
    "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1t3kjkJUjqjdCJ66RQIW8WElY4Zo85h0M/view",
  mail: "mailto:diegojarauta8@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Jarauta1",
  linkedin: "https://www.linkedin.com/in/diegojarauta/",
  gmail: "diegojarauta8@gmail.com",
 /*  gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/harikrishan.kanani/",
  twitter: "https://twitter.com/Harikrushn9", */
  instagram: "https://www.instagram.com/diegojarauta/",
};

const skills = {
  data: [
    {
      title: "Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Desarrollo front-end para aplicaciones web y smartphone",
        "⚡ Diseño responsive utilizando ReactJS",
        "⚡ Desarrollo back-end de aplicaciones con NodeJS, Express y base de datos MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          logo_path: "html5.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          logo_path: "css3.png",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          logo_path: "js.png",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          logo_path: "react.png",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          logo_path: "bootstrap.png",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ChartJS",
          fontAwesomeClassname: "simple-icons:mongodb",
          logo_path: "chartjs.png",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          logo_path: "node.png",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:mongodb",
          logo_path: "express.png",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          logo_path: "npm.png",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          logo_path: "mongodb2.png",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
      
        /* {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        }, */
       
        /* {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          logo_path: "git.png",
          style: {
            color: "#E94E32",
          },
        }, */
       
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          logo_path: "c.svg_.png.png",
          style: {
            color: "#E94E32",
          },
        },
        /* {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        }, */
      ],
    },
    {
      title: "Útiles",
      fileName: "CloudInfraImg",
      skills: [
       /*  "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration", */
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:githubactions",
          logo_path: "git.png",
          style: {
            color: "#5b77ef",
          },
        },
        /* {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        }, */
        /* {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        }, */
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          logo_path: "mongodb2.png",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          logo_path: "heroku.png",
          style: {
            color: "#6863A6",
          },
        },
        /* {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        }, */
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:firebase",
          logo_path: "visual-studio-code.png",
          style: {
            color: "#FFCA28",
          },
        },
        /* {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        }, */
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postgresql",
          logo_path: "postman.png",
          style: {
            color: "#336791",
          },
        },
        
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:docker",
          logo_path: "trello.png",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Discord",
          fontAwesomeClassname: "simple-icons:docker",
          logo_path: "discord.png",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:docker",
          logo_path: "slack.png",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Full Stack JavaScript Developer",
      subtitle: "BBK Bootcamp",
      logo_path: "bbk.png",
      alt_name: "BBK",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Programación en JavaScript",
        "⚡ Programación de base de datos MongoDB",
        "⚡ Programación web del lado del servidor: Node.js y Express",
        "⚡ Programación web del lado del cliente: HTML5, CSS3, JavaScript",
        "⚡ Uso de framework de SPA (React)",
        "⚡ Scrum (metodologías ágiles)",
        "⚡ Tecnología MERN",
        "⚡ GIT / Control de versiones",
      ],
      website_link: "https://bbkbootcamp.com/",
    },
    {
      title: "Desarrollo de productos electrónicos",
      subtitle: "San Valero (Centro formativo superior), Zaragoza",
      logo_path: "sanvalero.png",
      alt_name: "San Valero",
      duration: "2012 - 2014",
      descriptions: [
        "⚡ Electrónica analógica",
        "⚡ Sistemas digitales cableados",
        "⚡ Sistemas microprogramables",
        "⚡ Desarrollo y construcción de prototipos electrónicos",
        "⚡ Mantenimiento de equipos electrónicos",
        "⚡ Administración, gestión y comercialización de la pequeña empresa",
        "⚡ Técnicas de programación",
        "⚡ Electrónica de sistemas",
        "⚡ Desarrollo de proyectos de productos electrónicos",
        "⚡ Calidad",
        "⚡ Relaciones en el equipo de trabajo",
        "⚡ Formación y orientación laboral",
      ],
      website_link: "https://www.gruposanvalero.es/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack",
      subtitle: "Code4Jobs",
      logo_path: "code4jobs.png",
      certificate_link:
        "https://drive.google.com/file/d/1J3I2gOsBw9vDJcmoILYlZTaHvhRvcPir/view",
      alt_name: "Code4Jobs",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Habilidades directivas y gestión de equipos",
      subtitle: "EuroFor",
      logo_path: "eurofor.png",
      certificate_link:
        "https://drive.google.com/file/d/16EDFaIKHmrvZXWy7NWv3x-M2eekS_Zqn/view",
      alt_name: "EuroFor",
      color_code: "#ffffff",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experiencia",
  subtitle: "Trabajo, prácticas y voluntariado",
  description:
    "A lo largo de mi carrera laboral he ido colaborando con entidades o realizado proyectos por mi cuenta. Me encanta organizar talleres para compartir mis conocimientos, formar y motivar a que la gente se introduzca en el mundo tecnológico.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experiencia",
      experiences: [
        {
          title: "Full Stack JavaScript Junior Developer",
          company: "Code4Jobs",
          company_url: "https://www.code4jobs.com/",
          logo_path: "c4j.png",
          duration: "09/2020 - 02/2021",
          location: "Remoto",
          description:
            `Desarrollo completo de la aplicación web e-commerce DJ-Shop de manera individual, adquiriendo competencias y habilidades propias de un entorno de trabajo real. Para esta web las tecnologías utilizadas son:

            ➢ Programación en Javascript
            ➢ Programación de bases de datos MongoDB
            ➢ Programación web del lado del servidor (Nodejs y Express)
            ➢ Programación web del lado cliente: HTML5, CSS3, JavaScript y Bootstrap 4
            ➢ Uso de framework de SPA (React)
            ➢ Scrum (metodologías ágiles)
            ➢ Proyecto final basado en MERN
            ➢ GIT / Control de versiones`,
          color: "#0071C5",
        },
        {
          title: "Técnico I+D",
          company: "ELT SAU",
          company_url: "https://www.elt.es/",
          logo_path: "elt.png",
          duration: "10/2014 - Actualidad",
          location: "Zaragoza",
          description:
            `ELT es un grupo empresarial español especializado en el diseño, fabricación y comercialización de soluciones de iluminación, donde desempeño el siguiente trabajo como técnico de I+D:

            ➢ Evaluación equipos electrónicos de potencia
            ➢ Soporte técnico (evaluación, reparación y ayuda técnica a otros departamentos)
            ➢ Generación documentación técnica
            ➢ Rediseño equipos electrónicos de potencia para iluminación (LED)
            ➢ Realización de ensayos de homologación de acuerdo con la normativa
            ➢ Gestión, coordinación y supervisión de pruebas técnicas
            ➢ Diseño de equipos electrónicos de potencia para iluminación (LED)
            ➢ Soldadura SMD`,
          color: "#ee3c26",
        },
        {
          title: "Monitor técnico colonia Etopia Kids",
          company: "Ayuntamiento de Zaragoza",
          company_url: "https://www.etopiakids.es/",
          logo_path: "etopia.png",
          duration: "06/2014 - 07/2014",
          location: "Zaragoza",
          description:
            `Monitor "eTOPIA_Kids", enseñar a niños menores de 14 años a:
            - Utilizar software de programación
            - Conceptos electrónicos
            - Iniciación a la robótica
            - Diseño objetos 3D
            - Funcionamiento impresoras 3D`,
          color: "#ee3c26",
        },
        {
          title: "Técnico impresión 3D",
          company: "Sicnova 3D",
          company_url: "https://sicnova3d.com/",
          logo_path: "s3d.png",
          duration: "09/2013 - 06/2014",
          location: "Zaragoza",
          description:
            `Empresa dedicada a la fabricación y diseño de impresoras 3D, escáneres 3D e impresión de producto para el cliente. En ella, desarrollaba las siguientes funciones como técnico de I+D:

            ➢ Manejo de impresoras 3D y escáner 3D
            ➢ Mantenimiento y reparación de impresoras 3D
            ➢ Diseño objetos 3D
            ➢ Generación de información técnica
            ➢ I+D+i
            ➢ Dar formación a trabajadores y clientes en robótica y tecnología 3D
            ➢ Proyectos con Arduino
            ➢ Creación de aplicaciones para Smartphone con App Inventor`,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Voluntariado",
      experiences: [
        {
          title: "Monitor técnico Arduino Day",
          company: "Gobierno de Aragón",
          company_url: "https://arduinodayzgz.es/",
          logo_path: "arduinoday_2016.png",
          duration: "03/2016",
          location: "Zaragoza",
          description:
            "Arduino day es un evento que nace para conmemorar el aniversario de Arduino en el que imparto charlas técnicas sobre código C++ e imparto cursillo de iniciación a la programación.",
          color: "#4285F4",
        },
        {
          title: "Monitor técnico Arduino Day",
          company: "Gobierno de Aragón",
          company_url: "https://arduinodayzgz.es/",
          logo_path: "arduinoday_2015.png",
          duration: "03/2015",
          location: "Zaragoza",
          description:
            "Arduino day es un evento que nace para conmemorar el aniversario de Arduino en el que imparto charlas técnicas sobre código C++ e imparto cursillo de iniciación a la programación.",
          color: "#5a900f",
        },
        {
          title: "Monitor técnico",
          company: "Sicnova 3D",
          company_url: "https://sicnova3d.com/",
          logo_path: "s3d.png",
          duration: "06/2014 - 08/2014",
          location: "España",
          description:
            "Iniciativa de la empresa Sicnova 3D para impartir cursos donde enseño el montaje de impresoras 3D e iniciación a la programación por todas sus sedes en España.",
          color: "#C681C3",
        },
        {
          title: "Monitor técnico Arduino Day",
          company: "Gobierno de Aragón",
          company_url: "https://arduinodayzgz.es/",
          logo_path: "arduinoday_2014.png",
          duration: "03/2014",
          location: "Zaragoza",
          description:
            "Arduino day es un evento que nace para conmemorar el aniversario de Arduino en el que imparto charlas técnicas sobre código C++ e imparto cursillo de iniciación a la programación.",
          color: "#D83B01",
        },
        /* 
          color: "#196acf",
          color: "#040f26",
          color: "#D83B01",
          color: "#D83B01",
          color: "#5a900f",
        */
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Proyectos",
  description:
    "Para mis proyectos intento utilizar una amplia variedad de herramientas y lenguajes. Mi mejor experiencia es crear proyectos full stack con ReactJS en el front y NodeJs en la parte back. A continuación se muestran algunos de mis proyectos:",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Ponte en contacto conmigo",
    profile_image_path: "teach.jpg",
    description:
      "Puedes contactar conmigo por cualquier sitio que aparece aquí abajo. Intentaré contestar lo más rápido posible.",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "DJ Shop",
      url: "https://github.com/Jarauta1/DJ-cliente",
      description:
        "Proyecto Full Stack para una página web e-commerce basada en MERN Stack (MongoDB, Express.js, React.js, Node.js) con diferentes secciones y un análisis de datos accesible tan solo a usuarios con rango administrador.",
      languages: [
        {
          name: "HTML5",
          logo_path: "html5.png",
        },
        {
          name: "CSS3",
          logo_path: "html5.png",
        },
        {
          name: "React",
          logo_path: "html5.png",
        },
        {
          name: "Firebase",
          logo_path: "html5.png",
        },
      ],
    },
    {
      id: "1",
      name: "DJ Shop",
      url: "https://github.com/Jarauta1/DJ-cliente",
      description:
        "Proyecto Full Stack para una página web e-commerce basada en MERN Stack (MongoDB, Express.js, React.js, Node.js) con diferentes secciones y un análisis de datos accesible tan solo a usuarios con rango administrador.",
      languages: [
        {
          name: "HTML5",
          logo_path: "html5.png",
        },
        {
          name: "CSS3",
          logo_path: "html5.png",
        },
        {
          name: "React",
          logo_path: "html5.png",
        },
        {
          name: "Firebase",
          logo_path: "html5.png",
        },
      ],
    },
    {
      id: "2",
      name: "DJ Shop",
      url: "https://github.com/Jarauta1/DJ-cliente",
      description:
        "Proyecto Full Stack para una página web e-commerce basada en MERN Stack (MongoDB, Express.js, React.js, Node.js) con diferentes secciones y un análisis de datos accesible tan solo a usuarios con rango administrador.",
      languages: [
        {
          name: "HTML5",
          logo_path: "html5.png",
        },
        {
          name: "CSS3",
          logo_path: "html5.png",
        },
        {
          name: "React",
          logo_path: "html5.png",
        },
        {
          name: "Firebase",
          logo_path: "html5.png",
        },
      ],
    },
    {
      id: "3",
      name: "DJ Shop",
      url: "https://github.com/Jarauta1/DJ-cliente",
      description:
        "Proyecto Full Stack para una página web e-commerce basada en MERN Stack (MongoDB, Express.js, React.js, Node.js) con diferentes secciones y un análisis de datos accesible tan solo a usuarios con rango administrador.",
      languages: [
        {
          name: "HTML5",
          logo_path: "html5.png",
        },
        {
          name: "CSS3",
          logo_path: "html5.png",
        },
        {
          name: "React",
          logo_path: "html5.png",
        },
        {
          name: "Firebase",
          logo_path: "html5.png",
        },
      ],
    },
    {
      id: "4",
      name: "DJ Shop",
      url: "https://github.com/Jarauta1/DJ-cliente",
      description:
        "Proyecto Full Stack para una página web e-commerce basada en MERN Stack (MongoDB, Express.js, React.js, Node.js) con diferentes secciones y un análisis de datos accesible tan solo a usuarios con rango administrador.",
      languages: [
        {
          name: "HTML5",
          logo_path: "html5.png",
        },
        {
          name: "CSS3",
          logo_path: "html5.png",
        },
        {
          name: "React",
          logo_path: "html5.png",
        },
        {
          name: "Firebase",
          logo_path: "html5.png",
        },
      ],
    },
    
  
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
