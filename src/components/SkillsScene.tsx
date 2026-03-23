import { OrbitControls, Sparkles, useGLTF } from "@react-three/drei"


const SkillsScene = () => {
    const { scene } = useGLTF('/3D models/html.glb')

  return (
    <>
    <>
    <spotLight position={[10, 10, 10]} intensity={1250} />
    <OrbitControls />
        <spotLight position={[-10, -10, -10]} intensity={1250} />
        <Sparkles position={[0, 0 ,0]} scale={100} size={20} count={500} speed={1.5} />
        <group  position={[0, 0, 0]}>
        <primitive object={scene} scale={1.5} />
        </group>
        </>
    </>
  )
}

export default SkillsScene
