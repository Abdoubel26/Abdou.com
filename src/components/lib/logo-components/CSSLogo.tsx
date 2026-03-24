import { useGLTF } from "@react-three/drei"


const CSSLogo = () => {
       const { scene } = useGLTF('/3D models/css.glb')

  
  return (
    <>
        <primitive object={scene} scale={0.0335}  position={[-7, -3, -0.6]}  />
    </>
  )
}

export default CSSLogo
