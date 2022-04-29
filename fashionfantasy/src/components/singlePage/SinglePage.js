import "./Singlepage.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.patch}
      />
    </group>
  );
}

function App() {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [laces, setLaces] = useState("#ffffff");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");

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
                  // position={[10, 15, 10]}
                  // castShadow
                />
                <Model
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                    laces: laces,
                    caps: caps,
                    inner: inner,
                    patch: patch,
                    band: band,
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
              <label for="mesh">Mesh</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label for="stripes">Stripes</label>
            </div>
            <div>
              <input
                type="color"
                id="sole"
                name="sole"
                value={sole}
                onChange={(e) => setSole(e.target.value)}
              />
              <label for="sole">sole</label>
            </div>

            <div>
              <input
                type="color"
                id="lace"
                name="lace"
                value={laces}
                onChange={(e) => setLaces(e.target.value)}
              />
              <label for="lace">laces</label>
            </div>

            <div>
              <input
                type="color"
                id="caps"
                name="caps"
                value={caps}
                onChange={(e) => setCaps(e.target.value)}
              />
              <label for="caps">caps</label>
            </div>

            <div>
              <input
                type="color"
                id="inner"
                name="inner"
                value={inner}
                onChange={(e) => setInner(e.target.value)}
              />
              <label for="inner">Inner</label>
            </div>

            <div>
              <input
                type="color"
                id="patch"
                name="patch"
                value={patch}
                onChange={(e) => setPatch(e.target.value)}
              />
              <label for="patch">patch</label>
            </div>

            <div>
              <input
                type="color"
                id="band"
                name="band"
                value={band}
                onChange={(e) => setBand(e.target.value)}
              />
              <label for="band">band</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;