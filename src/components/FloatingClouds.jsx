import React, { useMemo } from 'react';
import { Cloud as CloudIcon } from "lucide-react";

const FloatingClouds = () => {
  // Deterministic positions so SSR/hydration is consistent
  const clouds = useMemo(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: 28 + (i * 11) % 38,
      style: {
        top: `${(i * 5.7) % 100}%`,
        left: `${(i * 13.3) % 100}%`,
        animationDuration: `${7 + (i * 1.9) % 6}s`,
        animationDelay: `${(i * 0.65) % 5}s`,
      },
    }))
  , []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
      {clouds.map((cloud) => (
        <CloudIcon
          key={cloud.id}
          className="absolute text-sky-300 opacity-[0.2] cloud-floating"
          size={cloud.size}
          style={cloud.style}
        />
      ))}
    </div>
  );
};

export default React.memo(FloatingClouds);