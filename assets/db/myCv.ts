export interface CV {
    ru: {
      initials: string;
      specialization: string;
      address: string;
      profilePhoto: string;
      contacts: {
        email: string;
        phone: string;
        telegram: string;
        gitHub: string;
      };
      maritalStatus: string;
      dateOfBirth: string;
      objective: string;
      education: string[];
      workExperience: string[];
      skills: string[];
      additionalEducation: {
        name: string;
        certificateUrl: string;
      }[];
    };
    en: {
      initials: string;
      specialization: string;
      address: string;
      profilePhoto: string;
      contacts: {
        email: string;
        phone: string;
        telegram: string;
        gitHub: string;
      };
      maritalStatus: string;
      dateOfBirth: string;
      objective: string;
      education: string[];
      workExperience: string[];
      skills: string[];
      additionalEducation: {
        name: string;
        certificateUrl: string;
      }[];
    };
}
const myCv: CV = {
  "ru": {
    initials: "Anvar Abduragimov",
    specialization: "Frontend developer",
    address: "Makhachkala, 367000, Russia",
    profilePhoto: "images/profilephoto.jpg",
    contacts: {
      email: "abduragimovdev@gmail.com, fort2652@gmail.com",
      phone: "+79884586930, +79387803265",
      telegram: "ankaboot05",
      gitHub: "https://github.com/crecker05ru"
    },
    maritalStatus: "married",
    dateOfBirth: "12th February 1991",
    objective: "Create convenient, accessible and interactive UI,create usefull web applications,grow as a professional in frontend development.",
    education: ["2009 — 2014  Dagestan State Institute of National Economy,department of Information Technology,specialist degree."],
    workExperience: ["Kalimat.io, 1st April 2022 – present.Position – frontend developer.Responsibilities - task management in ClickUp,layout drawing with Figma and SCSS preprocessor,writing code on Next.js framework,rendering data from the server in UI,object typing with TypeScript,updating remote branch in GitLab repository with Git and Bash."],
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React JS", "Next.js","Git",
      "English – A2",
      "Driving License - B"],
      additionalEducation : [
        {name: "November 2020 ,stepik.org ,Web development for beginners. HTML and CSS",certificateUrl:"https://stepik.org/cert/831092"},
        {name: "December 2020  ,stepik.org , JavaScript for beginners",certificateUrl:"https://stepik.org/cert/836636"},
        {name: "August 2021 , freecodecamp.org, JavaScript algoritms and data structures,",certificateUrl:"https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures"},
      ]
  },
  "en": {
    initials: "Anvar Abduragimov",
    specialization: "Frontend developer",
    address: "Makhachkala, 367000, Russia",
    profilePhoto: "images/profilephoto.jpg",
    contacts: {
      email: "abduragimovdev@gmail.com, fort2652@gmail.com",
      phone: "+79884586930, +79387803265",
      telegram: "ankaboot05",
      gitHub: "https://github.com/crecker05ru"
    },
    maritalStatus: "married",
    dateOfBirth: "12th February 1991",
    objective: "Create convenient, accessible and interactive UI,create usefull web applications,grow as a professional in frontend development.",
    education: ["2009 — 2014  Dagestan State Institute of National Economy,department of Information Technology,specialist degree."],
    workExperience: ["Kalimat.io, 1st April 2022 – present.Position – frontend developer.Responsibilities - task management in ClickUp,layout drawing with Figma and SCSS preprocessor,writing code on Next.js framework,rendering data from the server in UI,object typing with TypeScript,updating remote branch in GitLab repository with Git and Bash."],
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React JS", "Next.js","Git",
      "English – A2",
      "Driving License - B"],
      additionalEducation : [
        {name: "November 2020 ,stepik.org ,Web development for beginners. HTML and CSS",certificateUrl:"https://stepik.org/cert/831092"},
        {name: "December 2020  ,stepik.org , JavaScript for beginners",certificateUrl:"https://stepik.org/cert/836636"},
        {name: "August 2021 , freecodecamp.org, JavaScript algoritms and data structures,",certificateUrl:"https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures"},
      ]
  }
}

export default myCv