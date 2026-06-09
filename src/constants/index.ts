import solvra from '../assets/Solvra_icon.png';
import x from '../assets/x.jpg';
import rendezvous from '../assets/rendezvous.png';
import QuickCaht from '../assets/quickChat.svg';
import FTLogo from '../assets/FT.png';
import gladLogo from '../assets/glad.png';
import MS from '../assets/MS.png';
import VRlogo from '../assets/vrlogo.png';
import gemini from '../assets/gemini.png'

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



export const projects = [
  {
    title: "Solvra",
    description: "An app helping people clarify their problems using a recursive method",
    image: solvra,
    link: "https://github.com/Abdoubel26/Solvra",
  },
  {
    title: "Rendezvous Trackr",
    description: "Full Next.js web application where users & small businesses can manage their meetings and appointments",
    image: rendezvous,
    link: "https://github.com/Abdoubel26/appointment-tracker",
  },
  {
    title: "Twitter Clone",
    description: "Full stack X clone with user authentication, posts, likes, follows, user and post search, real-time chat, and Grok clone",
    image: x,
    link: "https://github.com/Abdoubel26/twitter-clone"
  },
   {
    title: "QuickChat",
    description: "Full stack real-time chatting app with Websockets and user authentication",
    image: QuickCaht,
    link: "https://github.com/Abdoubel26/QuickChat"
  },
  {
    title: "Finances-Trackr",
    description: "Full stack Next.js app that helps users track their balances and transactions",
    image: FTLogo,
    link: "https://github.com/Abdoubel26/financial-manager"
  }, 
  {
    title: "Glad",
    description: "News platform dedicated only for good news and positive stories.",
    image: gladLogo,
    link: "https://github.com/Abdoubel26/Glad"
  },
  {
    title: "Mindful-Scroll",
    description: "Chrome extension that controls the amount of time the user spends on social media websites and blocks them when the time ends",
    image: MS,
    link: "https://github.com/Abdoubel26/mindful-scroll"
  }, 
  {
    title: "Virtualr",
    description: "concept landing page for a Virtual Reality software company",
    image: VRlogo,
    link: "https://github.com/Abdoubel26/VR-company-website"
  },
  {
    title: "Gemini Clone",
    description: "Building a Gemini clone is a great example of my love to discover new technologies and what I can do with them.",
    image: gemini,
    link: "https://github.com/Abdoubel26/Google-Gemini-clone",
  }

]


