import { useGLTF } from "@react-three/drei"


const HTMLLogo = () => {
       const { scene } = useGLTF('/3D models/html.glb')

  return (
    <>
        <primitive object={scene} scale={1.3} rotation={[0, -Math.PI/2 , 0]} position={[0, 0, 0]} />
    </>
  )
}

export default HTMLLogo
