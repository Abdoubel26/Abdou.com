import { useGLTF } from "@react-three/drei"


const PythonLogo = () => {
       const { scene } = useGLTF('/3D models/python.glb')

  return (
    <>
        <primitive object={scene} scale={45} position={[-63, 3.5, 0]}/>
    </>
  )
}

export default PythonLogo