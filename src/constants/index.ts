import solvra from '../assets/Solvra_icon.png'
import x from '../assets/x.jpg'
import gemini from '../assets/gemini.png'
import QuickCaht from '../assets/quickChat.svg'
import VRlogo from '../assets/vrlogo.png'

import paleBlueDot from '../assets/book cover/pale-blue-dot.jpg' //
import sapiens from '../assets/book cover/sapiens.webp' //
import blackHoles from '../assets/book cover/black-holes.webp' // 
import SchCat from '../assets/book cover/cat.jpg' //
import nexus from '../assets/book cover/nexus.jpg' //
import theWordAsIsSeeIt from '../assets/book cover/worldas.jpg'
import dale from '../assets/book cover/dale.jpg' //



import paleBlueDotSpine from '../assets/book cover/pale-blue-dot-spine.png' //
import sapiensSpine from '../assets/book cover/sapiens-spine.png' //
import blackHolesSpine from '../assets/book cover/black-holes-spine.jpg' // 
import SchCatSpine from '../assets/book cover/cat-spine.png' //
import nexusSpine from '../assets/book cover/nexus-spine.png' //
import theWordAsIsSeeItSpine from '../assets/book cover/worldas-spine.png' //
import daleSpine from '../assets/book cover/dale-spine.png' //


type bcoversType = {cover: string, spineCover: string}

export const bcovers: bcoversType[] = [
  {cover: paleBlueDot, spineCover: paleBlueDotSpine},
  {cover: sapiens, spineCover: sapiensSpine},
  {cover: blackHoles, spineCover: blackHolesSpine},
  {cover: SchCat, spineCover: SchCatSpine}, 
  {cover: nexus, spineCover: nexusSpine},
  {cover: theWordAsIsSeeIt, spineCover: theWordAsIsSeeItSpine},
  {cover: dale, spineCover: daleSpine},
]



export const projects = [
  {
    title: "Solvra",
    description: "An app helping people clarify their problems using a recursive method",
    image: solvra,
    link: "https://github.com/Abdoubel26/Google-Gemini-clone",
  },
  {
    title: "Gemini Clone",
    description: "I'm always trying to discover new technologies and what I can do with them, building a Gemini clone is a great example of this.",
    image: gemini,
    link: "https://github.com/Abdoubel26/Google-Gemini-clone",
  },
  {
    title: "Twitter Clone",
    description: "A full Stack X clone with user authentication, posts, likes, follows, user and post search, real-time chat, and Grok clone",
    image: x,
    link: "https://github.com/Abdoubel26/twitter-clone"
  },
   {
    title: "QuickChat",
    description: "full stack real-time chatting app with Websockets and user authentication",
    image: QuickCaht,
    link: "https://github.com/Abdoubel26/twitter-clone"
  },
  {
    title: "Virtualr",
    description: "A concept landing page for a Virtual Reality software company",
    image: VRlogo,
    link: "https://github.com/Abdoubel26/twitter-clone"
  }

]


