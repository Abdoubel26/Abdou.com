import solvra from '../assets/Solvra_icon.png';
import x from '../assets/x.jpg';
import rendezvous from '../assets/rendezvous.png';
import QuickChat from '../assets/quickChat.svg';
import FTLogo from '../assets/FT.png';
import gladLogo from '../assets/glad.png';
import MS from '../assets/MS.png';
import debatriaLogo from '../assets/debatria.png';
import gemini from '../assets/gemini.png'

import SS_solvra from "../assets/screenshots/solvra-screenshot.png";
import SS_x from "../assets/screenshots/twitter-clone-screenshot.png";
import SS_rendezvous from "../assets/screenshots/rendezvous-trackr-screenshot.png";
import SS_quickChat from "../assets/screenshots/quickchat-screenshot.png";
import SS_FT from "../assets/screenshots/finances-trakr-screenshot.png";
import SS_glad from "../assets/screenshots/glad-screenshot.png"
import SS_debatria from "../assets/screenshots/debatria-screenshot.png"
import SS_gemini from "../assets/screenshots/gemini-clone-screenshot.png"

import paleBlueDot from '../assets/book cover/pale-blue-dot.jpg'; 
import sapiens from '../assets/book cover/sapiens.webp'; 
import blackHoles from '../assets/book cover/black-holes.webp'; 
import SchCat from '../assets/book cover/cat.jpg'; 
import zeroToOneCover from '../assets/book cover/zerotoone.jpg';
import theLeanStartupCover from '../assets/book cover/theleanstartup.jpeg';
import blitzscalingCover from '../assets/book cover/blitzscaling.jpg';


import paleBlueDotSpine from '../assets/book cover/pale-blue-dot-spine.png' 
import sapiensSpine from '../assets/book cover/sapiens-spine.png' 
import blackHolesSpine from '../assets/book cover/black-holes-spine.jpg' 
import zeroToOneSpineCover from '../assets/book cover/zerotoone-spine.png'
import theLeanStartupSpineCover from '../assets/book cover/theleanstartup-spine.png'
import blitzscalingSpineCover from '../assets/book cover/blitzscaling-spine.png'
import SchCatSpine from "../assets/book cover/cat-spine.png"

type bcoversType = {cover: string, spineCover: string}

export const bcovers: bcoversType[] = [
  {cover: paleBlueDot, spineCover: paleBlueDotSpine},
  {cover: sapiens, spineCover: sapiensSpine},
  {cover: blackHoles, spineCover: blackHolesSpine},
  {cover: SchCat, spineCover: SchCatSpine}, 
  {cover: zeroToOneCover, spineCover: zeroToOneSpineCover},
  {cover: theLeanStartupCover, spineCover: theLeanStartupSpineCover},
  {cover: blitzscalingCover, spineCover: blitzscalingSpineCover}
]


export type ProjectType = {
id: number;
title: string;
description: string;
longDescription: string;
techStack: string[];
features: string[];
screenshot: string | null;
image: string;
githubLink: string;
previewLink: string | null;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Debatria",
    description: "A Next.js social platform for launching open debates, connecting users by mutual interests, and facilitating structured discussions.",
    longDescription: "Debatria is a social discussion platform centered around structured debates and meaningful conversations. Users can discover debates based on shared interests, participate in discussions, and communicate through real-time messaging, voice calls, and video calls. The project explores community-building features while promoting thoughtful discourse and user engagement.",
    techStack: [
      "NextJS",
      "TypeScript",
      "Drizzle ORM",
      "Clerk",
      "PostgreSQL",
      "Agora.io",
      "Pusher"
    ],
    features: [
      "Authentication",
      "Dark/Light Mode",
      "Debates Feed",
      "Posting",
      "Real-Time Chatting",
      "Voice Calls",
      "Video Calls"
    ],
    screenshot: SS_debatria,
    image: debatriaLogo,
    githubLink: "https://github.com/Abdoubel26/VR-company-website",
    previewLink: "https://debatria.netlify.app/"
  },
  {
    id: 2,
    title: "Glad",
    description: "A curated digital news platform dedicated exclusively to publishing positive stories and uplifting global journalism.",
    longDescription: "Glad is a positive-news social platform created to highlight uplifting stories and constructive journalism from around the world. Unlike traditional news platforms that often focus on negative events, Glad aims to provide a more optimistic perspective by promoting positive developments, inspiring stories, and meaningful community engagement.",
    techStack: [
      "Nextjs",
      "TypeScript",
      "Drizzle ORM",
      "Clerk",
      "PostgresSQL"
    ],
    features: [
      "Authentication",
      "Feed",
      "Saving Posts",
      "Likes", 
      "Comments",
      "Responsive UI"
    ],
    screenshot: SS_glad,
    image: gladLogo,
    githubLink: "https://github.com/Abdoubel26/Glad",
    previewLink: "https://glad-news.netlify.app/"
  },
  {
    id: 3,
    title: "Rendezvous Trackr",
    description: "A full-stack Next.js platform for individuals and small businesses to streamline appointment scheduling and meeting management.",
    longDescription: "Rendezvous Trackr is a full-stack appointment management platform built for individuals and small businesses. The application streamlines scheduling by providing an intuitive dashboard for managing appointments, tracking statuses, and organizing customer interactions. The project focuses on creating a reliable and efficient booking workflow while maintaining secure authentication and persistent data management.",
    techStack: [
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "JSON Web Token",
      "Bcrypt",
      "PostgresSQL"
    ],
    features: [
      "Authentication", 
      "Appointments Dashboard",
      "Automatic Status Update"
    ],
    screenshot: SS_rendezvous,
    image: rendezvous,
    githubLink: "https://github.com/Abdoubel26/appointment-tracker",
    previewLink: "https://rendezvous-trackr.netlify.app/"
  },
  {
    id: 4,
    title: "Twitter Clone",
    description: "A full-stack X replica featuring secure authentication, real-time messaging, interactive social feeds, and an AI chat assistant.",
    longDescription: "Twitter Clone is a full-stack social media application inspired by X (formerly Twitter). It provides users with a complete social networking experience including account creation, content publishing, user interactions, real-time messaging, and AI-powered conversations. The project demonstrates the implementation of modern web technologies, scalable backend architecture, and real-time communication systems",
    techStack: [
      "MongoDB",
      "ExpressJS",
      "React",
      "NodeJS",
      "JSON Web Token",
      "Socket.io",
      "Bcrypt"
    ],
    features: [
      "Authentication",
      "Feed",
      "Posting",
      "Likes",
      "Followings/Followers",
      "Real-Time Chatting", 
      "Real-Time Chatbot Chatting"
    ],
    screenshot: SS_x,
    image: x,
    githubLink: "https://github.com/Abdoubel26/twitter-clone",
    previewLink: null
  },
  {
    id: 5,
    title: "Finances-Trackr",
    description: "A robust Next.js financial management system allowing users to securely track real-time balances, income, and transactions.",
    longDescription: "Finances Trackr is a financial management platform designed to help users monitor their income, expenses, and overall financial health. Through interactive dashboards and automated calculations, users can gain a clear overview of their balances and transaction history. The application emphasizes security, usability, and accurate financial tracking.",
    techStack: [
      "NextJS",
      "Drizzle ORM",
      "PostgresSQL",
      "JSON Web Token",
      "Bcrypt"
    ],
    features: [
      "Authentication",
      "Analytics Dashboard",
      "Automatic Balance Calculation"
    ],
    screenshot: SS_FT,
    image: FTLogo,
    githubLink: "https://github.com/Abdoubel26/financial-manager",
    previewLink: "https://finances-trackr.netlify.app/"
  },
  {
    id: 6,
    title: "Mindful-Scroll",
    description: "A productivity-focused Chrome extension that monitors social media usage and enforces customizable daily time limits.",
    longDescription: "Mindful Scroll is a productivity-focused Chrome extension that helps users develop healthier digital habits by monitoring time spent on distracting websites. The extension allows users to define daily limits and automatically restrict access once those limits are reached, encouraging more intentional internet usage and improved focus.",
    techStack: [
      "JavaScript"
    ],
    features: [
      "Timer",
      "Website Blocking"
    ],
    screenshot: null,
    image: MS,
    githubLink: "https://github.com/Abdoubel26/mindful-scroll",
    previewLink: null
  },
  {
    id: 7,
    title: "Gemini Clone",
    description: "An AI-powered interface replicating advanced LLM features to demonstrate modern API integration and generative web workflows.",
    longDescription: "Gemini Clone is an AI-powered web application that replicates the experience of interacting with a modern large language model. The project demonstrates prompt handling, API integration, conversational interfaces, and responsive user experience design. It serves as both a practical AI integration project and a showcase of modern frontend development techniques.",
    techStack: [
      "React",
      "JavaScript",
      "Responsive UI"
    ],
    features: [
      "Real-Time Chatbot Messaging",
      "API Integration", 
      "Prompt Injection"
    ],
    screenshot: SS_gemini,
    image: gemini,
    githubLink: "https://github.com/Abdoubel26/Google-Gemini-clone",
    previewLink: null
  },
  {
    id: 8,
    title: "QuickChat",
    description: "A high-performance, real-time chat application built with secure user authentication and persistent WebSocket connections.",
    longDescription: "QuickChat is a real-time messaging application focused on speed, reliability, and user experience. The platform enables authenticated users to communicate instantly through persistent WebSocket connections while maintaining secure account management. The project demonstrates the implementation of real-time communication systems and scalable chat architecture.",
    techStack: [
      "MongoDB",
      "ExpressJS",
      "React",
      "NodeJS",
      "JSON Web Token",
      "Bcrypt",
      "Socket.io"
    ],
    features: [
      "Authentication",
      "Real-Time Messaging"
    ],
    screenshot: SS_quickChat,
    image: QuickChat,
    githubLink: "https://github.com/Abdoubel26/QuickChat",
    previewLink: null
  },
  {
    id: 9,
    title: "Solvra",
    description: "A problem-solving application that helps users clarify complex issues using a structured recursive methodology.",
    longDescription: "Solvra is a problem-solving platform designed to help users break down complex personal, professional, or technical challenges into smaller, more manageable components. Using a structured recursive methodology, the application guides users through identifying root causes, exploring possible solutions, and organizing their thoughts into a clear decision-making process.",
    techStack: [
      "React", 
      "TypeScript",
      "TailwindCSS"
    ],
    features: [
      "Recursive Problem Solving",
      "Interactive UX",
      "Responsive UI"
    ],
    screenshot: SS_solvra,
    image: solvra,
    githubLink: "https://github.com/Abdoubel26/Solvra",
    previewLink: "https://solvra-co.netlify.app/"
  }
];