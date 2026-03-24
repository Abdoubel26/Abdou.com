import Book from './lib/Book'
import { bcovers } from '../constants'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import {  Sparkles } from '@react-three/drei'
import { useEffect, useRef, type RefObject } from 'react'
import * as THREE from "three";
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);


const ReadsScene = ({elementRef}: {elementRef: RefObject<HTMLDivElement>}) => {
    
    const groupRef = useRef<THREE.Group>(null!);
    const progress = useRef(0);

    useEffect(() => {
        if (!elementRef.current) return; 
        const ctx =   gsap.to(progress, {
                current: 1,
                ease: "none",
                scrollTrigger: {
                trigger: elementRef.current,
                start: "top top",
                end: "+=150%",
                scrub: 6,
                },
            });
        ScrollTrigger.refresh(); // ensure correct measurement

        return () => { ctx.revert(); }
      }
    , [elementRef]);

    useFrame(() => {
                if (groupRef.current) {
                    groupRef.current.position.x = -bcovers.length * 2.2 * progress.current
    }})

  return (
        <>
        <spotLight position={[10, 10, 10]} intensity={1250} />
        <spotLight position={[-10, -10, -10]} intensity={1250} />
        <Sparkles position={[0, 0 ,0]} scale={100} size={20} count={500} speed={1.5} />
        <group ref={groupRef} position={[0, 0, 0]}>
        {bcovers.map((cover, index) => (
            <Book key={index} cover={cover.cover} spineCover={cover.spineCover} position={index}></Book>
        ))
        }
        </group>
        </>
  )
}

export default ReadsScene
