import { useGLTF } from "@react-three/drei"

const TailwindLogo = () => {
       const { scene } = useGLTF('/3D models/tailwind.glb')

  return (
    <>
        <primitive object={scene} scale={50} position={[-46.5, 3, 0]} />
    </>
  )
}

export default TailwindLogo
