import {
  PresentationControls,
  Float,
  Html,
  Environment,
  useGLTF,
  Text,
  ContactShadows,
} from "@react-three/drei";
import Player from "./Player.jsx";

export default function Experience() {
  const iphone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );
  //https://models.readyplayer.me/6605eda875cd33aaccd53d67.glb
  return (
    <>
      <color args={["#0f0f0f"]} attach="background" />
      <Environment preset="sunset" />

      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <primitive
            object={iphone.scene}
            position-y={-1.5}
            rotation-x={-0.4}
            rotation-y={-0.7}
            rotation-z={-0.3}
          >
            <Html
              distanceFactor={1.55}
              wrapperClass="htmlScreen"
              position={[0.17, 1.32, 0.03]}
              transform
            >
              <iframe src="https://pordigy-wd-04.vercel.app/"></iframe>
            </Html>
          </primitive>
          <Player />
          <Text
            position={[-2.3, 0.75, 0.75]}
            color={"white"}
            fontSize={0.5}
            rotation-y={0}
            maxWidth={2}
            textAlign="center"
            font="./bangers-v20-latin-regular.woff"
          >
            Ayman Mohamed
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-2} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
