// import { Link } from "react-router-dom";
import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project6.png"
import logo from '../assets/Logo1.png'
import { Link } from "react-router-dom";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Tailwind CSS. as well as back-end technologies like Node.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Tailwind CSS, Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Nike Clone Website",
    image: project1,
    description:
      "A sleek and responsive Nike clone landing page built with React and Tailwind CSS, showcasing dynamic UI and modern design..",
    technologies: [ "Tailwind CSS", "React",],
    Link: "https://nike-five-azure.vercel.app/",
  },
  {
    title: "Graha Estate ",
    image: project2,
    description:
      "A modern and responsive real estate landing page built with React and Tailwind CSS, designed for a seamless user experience.",
    technologies: ["Tailwind CSS", "React"],
    Link:"https://graha-estate.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind CSS", "React"],
    Link:"https://portfolio-w6g2.vercel.app/",
  },
  {
    title: "Job-Form",
    image: project4,
    description:
      "A simple and responsive job application form built with HTML, CSS, and JavaScript for seamless user input and validation.",
    technologies: ["HTML", "CSS", "Javascript"],
    Link: "https://job-form-smoky.vercel.app/",
  },
  {
    title: "Image Slider",
    image: project5,
    description:
      "A responsive image slider built with HTML, CSS, and JavaScript, featuring smooth transitions and interactive navigation. ",
    technologies: ["HTML", "CSS", "Javascript",],
    Link: "https://image-slider-rho-one.vercel.app/",
  },
  {
    title: "Flag Site",
    image: project6,
    description:
      "Flag Site is a responsive web app for exploring country flags and their details.",
    technologies: ["HTML", "CSS","Javascript"],
    Link: "https://flag-site.vercel.app/",
  },
];

export const CONTACT = {
  address: "Saravana Nagar, kovaiPudur, Coimbatore, Tamil Nadu, India",
  phoneNo: "+91 9600628157 ",
  email: "barath0704@gmail.com",
};

export  {logo}