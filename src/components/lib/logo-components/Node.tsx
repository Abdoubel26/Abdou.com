import { useGLTF } from "@react-three/drei"

const NodeLogo = () => {
       const { scene } = useGLTF('/3D models/node.glb')

  return (
    <>
        <primitive object={scene} scale={50} position={[-39, 3, 0]} />
    </>
  )
}

export default NodeLogo
