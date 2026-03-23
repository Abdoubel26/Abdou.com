import { useTexture } from "@react-three/drei";
import pagesimg from '../../assets/book cover/pages-spine.png'


type PorpTypes =  {cover: string, spineCover: string, position: number} 

function Book({ cover, spineCover, position }: PorpTypes) {
  const texture = useTexture(cover);
  const spineTexture = useTexture(spineCover)
  const pagesTexture = useTexture(pagesimg)
  return (
    <mesh position={[ position*1.9 , 0 , 0]}>
    <boxGeometry args={[1, 1.5, 0.2]} />
        <meshStandardMaterial attach="material-0" map={spineTexture}  />
        <meshStandardMaterial attach="material-1" map={pagesTexture} />
        <meshStandardMaterial attach="material-2" map={pagesTexture} />
        <meshStandardMaterial attach="material-3" map={pagesTexture} />
        <meshStandardMaterial attach="material-3" map={pagesTexture} />
        <meshStandardMaterial attach="material-4" map={texture} />   

    </mesh>
  );
}

export default Book