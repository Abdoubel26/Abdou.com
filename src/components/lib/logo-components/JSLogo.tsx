import { useGLTF } from "@react-three/drei"

const JSLogo = () => {
       const { scene } = useGLTF('/3D models/js.glb')

  return (
    <>
        <primitive object={scene} scale={50} position={[-15.5, 0.5, 0]} />
    </>
  )
}

export default JSLogo
