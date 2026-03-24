import { useGLTF } from "@react-three/drei"

const TSLogo = () => {
       const { scene } = useGLTF('/3D models/ts.glb')

  return (
    <>
        <primitive object={scene} scale={50} position={[-24, 3.1, 0]} />
    </>
  )
}

export default TSLogo
