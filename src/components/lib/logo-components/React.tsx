import { useGLTF } from "@react-three/drei"

const ReactLogo = () => {
       const { scene } = useGLTF('/3D models/react.glb')

  return (
    <>
        <primitive object={scene} scale={1} position={[-32, 3, 0]} />
    </>
  )
}

export default ReactLogo
