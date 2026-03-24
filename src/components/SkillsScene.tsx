import {  Sparkles } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { useThree } from "@react-three/fiber"
import HTMLLogo from "./lib/logo-components/HTMLLogo"
import CSSLogo from "./lib/logo-components/CSSLogo"
import GitLogo from "./lib/logo-components/Git"
import MongoLogo from "./lib/logo-components/Mongo"
import PythonLogo from "./lib/logo-components/PythonLogo"
import TSLogo from "./lib/logo-components/TSLogo"
import JSLogo from "./lib/logo-components/JSLogo"
import NodeLogo from "./lib/logo-components/Node"
import ReactLogo from "./lib/logo-components/React"
import TailwindLogo from "./lib/logo-components/TailwindLogo"
import { useEffect, useRef } from "react"
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger);

const SkillsScene = () => {

  const logosRef = useRef<THREE.Group>(null!)
  const { camera } = useThree();
  
  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".skills-section",
    start: "top top",
    end: "+=150", // how long the pin lasts
    scrub: 6,
  });

  gsap.to(logosRef.current.position, {
    x: 63,
    ease: "none",
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top top",
      end: "+=300",
      scrub: 6,
    }
  });
}, []);

  useEffect(() => {
  camera.position.set(0, 4, 6);
  camera.lookAt(0, 4, 0); 
  }, []);

  return (
    <>
  <ambientLight intensity={0.5} />

  <directionalLight
    position={[5, 5, 5]}
    intensity={1.5}
    castShadow
  />

  <directionalLight
    position={[-5, 3, 2]}
    intensity={0.8}
  />


  <directionalLight
    position={[0, -3, 5]}
    intensity={0.5}
  />
        <Sparkles position={[0, 0 ,0]} scale={100} size={20} count={500} speed={1.5} />
        <group ref={logosRef}  position={[0, 0, 0]} >
        <HTMLLogo />
        <CSSLogo />
        <JSLogo />
        <TSLogo />
        <ReactLogo />
        <NodeLogo />
        <TailwindLogo />
        <GitLogo />
        <MongoLogo />
        <PythonLogo />
        </group>
        </>
  )
}

export default SkillsScene
