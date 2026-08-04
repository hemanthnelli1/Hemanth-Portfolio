import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function PixelField() {
  const points = useRef();

  const positions = useMemo(() => {
    const arr = [];

    const width = 140;
    const height = 80;
    const spacing = 0.18;

    for (let y = -height; y < height; y++) {
      for (let x = -width; x < width; x++) {
        arr.push(
          x * spacing,
          y * spacing,
          (Math.random() - 0.5) * 0.05
        );
      }
    }

    return new Float32Array(arr);
  }, []);

  const original = useMemo(() => positions.slice(), [positions]);

  useFrame(({ clock }) => {
    if (!points.current) return;

    const t = clock.getElapsedTime();
    const array = points.current.geometry.attributes.position.array;

    for (let i = 0; i < array.length; i += 3) {
      const ox = original[i];
      const oy = original[i + 1];

      array[i] = ox + Math.sin(t * 0.22 + oy * 0.6) * 0.03;
      array[i + 1] = oy + Math.cos(t * 0.18 + ox * 0.5) * 0.03;
      array[i + 2] =
        Math.sin(t * 0.4 + ox * 0.4 + oy * 0.2) * 0.015;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points
      ref={points}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.09}
      />
    </Points>
  );
}

export default function PixelGrid() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 8,
      }}
    >
      <Canvas
        orthographic
        camera={{
          zoom: 24,
          position: [0, 0, 100],
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <ambientLight intensity={0.2} />
        <PixelField />
      </Canvas>
    </div>
  );
}