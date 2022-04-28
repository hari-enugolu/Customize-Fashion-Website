import "./Singlepage.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/myshoe.glb");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.mesh_0_1.geometry}
        material={nodes.mesh_0_1.material}
        material-color={props.customColors.lace}
      />
      <mesh
        geometry={nodes.mesh_0_2.geometry}
        material={nodes.mesh_0_2.material}
        // material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_3.geometry}
        material={nodes.mesh_0_3.material}
        // material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_4.geometry}
        material={nodes.mesh_0_4.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_5.geometry}
        material={nodes.mesh_0_5.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_6.geometry}
        material={nodes.mesh_0_6.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_7.geometry}
        material={nodes.mesh_0_7.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_8.geometry}
        material={nodes.mesh_0_8.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_9.geometry}
        material={nodes.mesh_0_9.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_10.geometry}
        material={nodes.mesh_0_10.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_11.geometry}
        material={nodes.mesh_0_11.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_12.geometry}
        material={nodes.mesh_0_12.material}
        material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_13.geometry}
        material={nodes.mesh_0_13.material}
        // material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_14.geometry}
        material={nodes.mesh_0_14.material}
        // material-color="#fff000"
      />
      <mesh
        geometry={nodes.mesh_0_15.geometry}
        material={nodes.mesh_0_15.material}
        // material-color="#fff000"
      />
    </group>
  );
}

function App() {
  const [mesh, setMesh] = useState("#ffffff");
  const [lace, setStripes] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");

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
                    mesh: mesh,
                    lace: lace,
                    soul: soul,
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
                value={mesh}
                onChange={(e) => setMesh(e.target.value)}
              />
              <label for="mesh">Main</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={lace}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label for="stripes">laces</label>
            </div>
            <div>
              <input
                type="color"
                id="soul"
                name="soul"
                value={soul}
                onChange={(e) => setSoul(e.target.value)}
              />
              <label for="soul">Soul</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
