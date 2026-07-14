"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Silk from "./Silk";

export default function SilkPortal() {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const target = document.getElementById("silk-container");
    if (target) {
      setContainer(target);
    }
  }, []);

  if (!container) return null;

  return createPortal(
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>,
    container
  );
}
