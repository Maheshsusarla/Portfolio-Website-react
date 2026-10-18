export const profile = {
  name: "Mahesh Susarla",
  roles: ["Python Full Stack Developer", "Django  Learner", "React  Developer","FrontEnd Developer","Sql Developer", "Problem Solver"],
  intro:
 "Python Full Stack Developer who loves building clean, responsive web apps with React, Django and MySQL. Fresher open to internships and entry-level roles.",  email: "maheshsusarla5@gmail.com",
  phone: "+91 93818 02914",
  location: "Nellore, Andhra Pradesh, India",
  github: "https://github.com/Maheshsusarla",
  linkedin: "https://www.linkedin.com/in/mahesh-susarla-509388279/",
  resume: "/resume.pdf", 
  photo: "./public/my-img.png",  
};

export const about = {
  text:
   "I am a recent B.Tech Computer Science graduate and an aspiring Python Full Stack Developer. I enjoy turning ideas into working web applications, from the frontend with HTML, CSS, JavaScript and React to the backend with Python, Django and MySQL. In my final year, I built a Network Anomaly Detection system using an Autoencoder, which gave me hands-on experience in machine learning and data analysis. I have also built projects like MyShop (a React e-commerce app), a Movie App, SmartCart and a Bank Management System, where I practiced routing, state management, API integration and responsive design. I'm a quick learner who loves solving problems, and I'm looking for an opportunity to start my career as a software developer and grow with a great team.",
 stats: [
  { value: "5+", label: "Projects" },
  { value: "4+", label: "Certifications" },
  { value: "2026", label: "Graduate" },
],


  details: [
    ["Location", "Nellore, Andhra Pradesh"],
    ["Degree", "B.Tech CSE, RSR Engineering College (2022–2026)"],
    ["Languages", "English, Telugu"],
    ["Status", "Open to Opportunities"],
  ],
};

const icon = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;



export const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", logo: icon("python") },
      { name: "JavaScript", logo: icon("javascript") },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML5", logo: icon("html5") },
      { name: "CSS3", logo: icon("css3") },
      { name: "Bootstrap", logo: icon("bootstrap") },
      { name: "React", logo: icon("react") },
      { name: "Django", logo: icon("django", "plain"), invert: true },
      { name: "Flask", logo: icon("flask"), invert: true },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", logo: icon("mysql") },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", logo: icon("git") },
      { name: "GitHub", logo: icon("github"), invert: true },
      { name: "VS Code", logo: icon("vscode") },
    ],
  },
];

export const certifications = [
  { name: "Front-End Web Development (HTML, CSS, JavaScript, React.js), Udemy", link: "https://lnkd.in/p/gFvYCka3" },
  { name: "Python Fundamentals, Infosys Springboard", link: "https://lnkd.in/p/gpprneJM" },
];

export const projects = [

  {
  icon: "🛍️",
  category: "React",
  date: "October  2026",
  title: "MyShop – React E-Commerce App",
  description:
    "A full-featured e-commerce frontend built with React and Vite. Includes signup/login, product search, category filter and sorting, dynamic product pages, a persistent cart, checkout with order history, dark mode and a fully responsive UI. Uses the Fake Store API for products and localStorage for auth, cart and orders.",
  tech: ["React", "Vite", "React Router", "Context API", "CSS3", "Fake Store API", "LocalStorage"],
  demo: "https://maheshsusarla.github.io/YOUR-REPO-NAME/",
  code: "https://github.com/Maheshsusarla/YOUR-REPO-NAME.git",
},

{
  icon: "🎬",
  category: "React",
  date: "September  2026",
  title: "Movie App – React Movie Browser",
  description:
    "A responsive movie browsing app built with React. Features real-time search, dynamic genre filters, sorting by rating or year, favorites saved in localStorage, dedicated movie detail pages with dynamic routing, load-more pagination and a light/dark theme toggle.",
  tech: ["React", "Vite", "React Router", "Hooks", "CSS Grid", "LocalStorage"],
  demo: "https://maheshsusarla.github.io/YOUR-REPO-NAME/",
  code: "https://github.com/Maheshsusarla/YOUR-REPO-NAME.git",
},

  {
    icon: "🛡️",
    category: "Deep Learning",
    date: "December 2025– April 2026",
    title: "Network Anomaly Detection Using Autoencoders",
    description:
      "Detects cyberattacks using a deep learning autoencoder that learns normal network behaviour and flags abnormal patterns. Uses the CICIDS2017 dataset to detect known and zero-day attacks with fewer false alarms.",
    tech: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "MySQL"],
    demo: "https://github.com/Maheshsusarla/Deep-Learning-Based-Network-Intrusion-Detection-Using-Autoencoder-Anomaly-Detection-.git",
    code: "https://github.com/Maheshsusarla/Deep-Learning-Based-Network-Intrusion-Detection-Using-Autoencoder-Anomaly-Detection-.git",
  },
  {
    icon: "🛒",
    category: "Frontend",
    date: "July 2026",
    title: "SmartCart – Intelligent Shopping Assistant",
    description:
      "Responsive e-commerce app with wishlist, search, filters, coupons, budget planner, purchase history, invoice generation, dark mode and LocalStorage.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    demo: "https://maheshsusarla.github.io/SmartCart/",
    code: "https://github.com/Maheshsusarla/SmartCart.git",
  },

];

export const achievements = [
  { icon: "🏅", title: "Python Foundation Certification", by: "Infosys Springboard", text: "Covered OOP, data types, loops, arrays, classes, methods and exception handling." },
  { icon: "🤝", title: "NSS Volunteer", by: "RSR Engg. College · 2024–2025", text: "Took part in community service and social initiatives as a National Service Scheme volunteer." },
  { icon: "🚀", title: "Self-Driven Learner", by: "Ongoing", text: "Always exploring online resources and certifications in Python, web development and modern frameworks." },
];