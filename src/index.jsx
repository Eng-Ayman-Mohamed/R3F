import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Sparkles } from "@react-three/drei";
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4],
    }}
  >
    <Sparkles
      color="orange"
      count={200}
      noise={5}
      scale={7}
      opacity={1}
      size={
        (2.1680212020874023,
        3.921435832977295,
        0.03443816304206848,
        2.2271058559417725,
        4.862522602081299,
        2.9129230976104736,
        2.7750658988952637,
        3.7239739894866943)
      }
      speed={0.3}
    />
    <Experience />
  </Canvas>
);
