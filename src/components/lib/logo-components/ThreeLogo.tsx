import { useGLTF } from "@react-three/drei"

const ThreeLogo = () => {
       const { scene } = useGLTF('/3D models/three.glb')
 
  return (
    <>
        <primitive object={scene}  />
    </>
  )
}

export default ThreeLogo
