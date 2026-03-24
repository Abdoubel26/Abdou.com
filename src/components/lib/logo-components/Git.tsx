import { useGLTF } from "@react-three/drei"

const GitLogo = () => {
       const { scene } = useGLTF('/3D models/git.glb')
      
  return (
    <>
        <primitive object={scene} scale={3} position={[-52.5, 3.5, 0]} />
    </>
  )
}

export default GitLogo
