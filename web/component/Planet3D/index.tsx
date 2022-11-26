import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { ref, getStorage } from "@firebase/storage";
type Props = {};

export const Planet3D: React.FC<Props> = (props) => {
  const planet3Ddata = "";
  const { scene } = useGLTF("http://localhost:3000/planets/high.glb");
  return <primitive object={scene} />;
};

export default Planet3D;
