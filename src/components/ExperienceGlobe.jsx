import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";

const experiences = [
  { id: "xtragrad", label: "AI Intern", company: "XTRAGRAD Technologies", location: "Remote · Jun–Jul 2026", text: "Built TrueLensX, an AI image-forensics platform with TensorFlow, Flask, and React.", coordinates: [17.385, 78.487] },
  { id: "pixelwind", label: "Full Stack", company: "PixelWind Technologies", location: "Visakhapatnam · Dec 2023–May 2024", text: "Shipped responsive e-commerce features as part of a six-person product team.", coordinates: [17.6868, 83.2185] },
];

function toVector3([lat, lng], radius = 1.54) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = lng * (Math.PI / 180);
  return new THREE.Vector3(-radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
}

function ExperienceSphere({ active, onHover }) {
  const dots = useMemo(() => experiences.map((item) => ({ ...item, point: toVector3(item.coordinates) })), []);
  return <group rotation={[0.04, 0, 0]}>
    <mesh><sphereGeometry args={[1.5, 48, 48]} /><meshStandardMaterial color="#06194c" roughness={0.62} metalness={0.18} /></mesh>
    <mesh><sphereGeometry args={[1.515, 32, 22]} /><meshBasicMaterial color="#a5d8ff" wireframe transparent opacity={0.23} /></mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.53, 0.008, 8, 96]} /><meshBasicMaterial color="#4fd8ff" transparent opacity={0.64} /></mesh>
    {dots.map((item) => <group key={item.id} position={item.point}>
      <mesh onPointerOver={(event) => { event.stopPropagation(); onHover(item); document.body.style.cursor = "pointer"; }} onPointerOut={() => { onHover(null); document.body.style.cursor = "auto"; }}>
        <sphereGeometry args={[active?.id === item.id ? 0.105 : 0.075, 18, 18]} /><meshBasicMaterial color={active?.id === item.id ? "#f6cf6b" : "#43d7ff"} />
      </mesh>
      <mesh scale={[1.9, 1.9, 1.9]}><sphereGeometry args={[0.075, 18, 18]} /><meshBasicMaterial color="#43d7ff" transparent opacity={0.18} /></mesh>
    </group>)}
  </group>;
}

export default function ExperienceGlobe() {
  const [active, setActive] = useState(null);
  return <div className="experience-globe" aria-label="Interactive globe showing experience locations">
    <Canvas camera={{ position: [0, 0, 4.6], fov: 42 }} dpr={[1, 2]}>
      <ambientLight intensity={1.6} /><pointLight position={[3, 2, 4]} intensity={17} color="#8ee9ff" /><pointLight position={[-4, -2, 2]} intensity={5} color="#3857df" />
      <Stars radius={8} depth={3} count={450} factor={1.3} saturation={0} fade speed={0.4} /><ExperienceSphere active={active} onHover={setActive} /><OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.14} />
    </Canvas>
    {active && <div className="globe-experience-card" aria-live="polite"><span>Visakhapatnam · {active.location}</span><strong>{active.label} · {active.company}</strong><p>{active.text}</p></div>}
  </div>;
}
