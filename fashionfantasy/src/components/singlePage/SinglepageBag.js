import "./Singlepage.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mycollegebag.glb");
  return (
    <group ref={group} {...props} scale={3}>
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.mesh_0_1.geometry}
        material={nodes.mesh_0_1.material}
      />
      <mesh
        geometry={nodes.mesh_0_2.geometry}
        material={nodes.mesh_0_2.material}
      />
      <mesh
        geometry={nodes.mesh_0_3.geometry}
        material={nodes.mesh_0_3.material}
      />
      <mesh
        geometry={nodes.mesh_0_4.geometry}
        material={nodes.mesh_0_4.material}
        material-color={props.customColors.baobao}
      />
      <mesh
        geometry={nodes.mesh_0_5.geometry}
        material={nodes.mesh_0_5.material}
      />
    </group>
  );
}

function App() {
  const [baobao, setMesh] = useState("#ffffff");
  const [budai, setStripes] = useState("#ffffff");
  const [daizi, setSoul] = useState("#ffffff");

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <Model
                  customColors={{
                    baobao: baobao,
                    budai: "#ffffff",
                    daizi: "#ffffff",
                  }}
                />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>
          <h2>Color chooser</h2>
          <div className="colors">
            <div>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value={baobao}
                onChange={(e) => setMesh(e.target.value)}
              />
              <label for="mesh">baobao</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={budai}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label for="stripes">budai</label>
            </div>
            <div>
              <input
                type="color"
                id="soul"
                name="soul"
                value={daizi}
                onChange={(e) => setSoul(e.target.value)}
              />
              <label for="soul">daizi</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
