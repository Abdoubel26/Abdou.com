import { useGLTF } from "@react-three/drei"

const MongoLogo = () => {
       const { scene } = useGLTF('/3D models/mongodb.glb')

  return (
    <>
        <primitive object={scene}  scale={50} position={[-57.5, 4, 0.5]}/>
    </>
  )
}

export default MongoLogo
