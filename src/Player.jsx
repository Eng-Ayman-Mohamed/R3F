import {
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

export default function Experience() {
  const iphone = useGLTF(
    "https://models.readyplayer.me/6605eda875cd33aaccd53d67.glb"
  );
  //https://models.readyplayer.me/6605eda875cd33aaccd53d67.glb
  return (
    <>
      <primitive
        object={iphone.scene}
        position={[3, -1.4, 1.5]}
        rotation={[0, -1.5, 0]}
        scale={1.5}
      />
    </>
  );
}
