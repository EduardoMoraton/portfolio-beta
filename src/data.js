// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo-react.svg";
import Logo_join_to_buy from "./images/logo_join_to_buy.png"
import Logo_carsim from "./images/carsim.png"
import React  from 'react';
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "EduardoMoraton";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="mdi:linkedin" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Apasionado de la tecnología, siempre buscando nuevas tecnologías para crear pequeños proyectos innovadores. Amante de la creatividad y la experimentación.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="teenyicons:c-sharp-solid" className="display-4" />,
    name: "C#",
  },
  {
    id: 2,
    skill: <Icon icon="nonicons:java-16" className="display-4" />,
    name: "Java",
  },
  {
    id: 3,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "Python",
  },
  {
    id: 4,
    skill: <Icon icon="simple-icons:pandas" className="display-4" />,
    name: "Data Science libraries (Pandas, Numpy, Matplotlib)",
  },
  {
    id: 5,
    skill: <Icon icon="simple-icons:spring" className="display-4" />,
    name: "SpringBoot",
  },
  {
    id: 6,
    skill: <Icon icon="tabler:sql" className="display-4" />,
    name: "SQL",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 6,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 7,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 8,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 8,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 9,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 11,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 12,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["FilmSpot", "JoinToBuyBusinessApp", "CarSim-V1"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "JoinToBuyBusinessApp",
    image: Logo_join_to_buy,
  },
  {
    name: "FilmSpot",
    image: Logo,
  },
  {
    name: "CarSim-V1",
    image: Logo_carsim,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xaygqpjl";
