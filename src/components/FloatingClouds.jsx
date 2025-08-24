import React, { useMemo } from 'react';
import { Cloud as CloudIcon } from "lucide-react";

const FloatingClouds = () => {
  const clouds = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: 32 + Math.random() * 24,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDuration: `${5 + Math.random() * 5}s`,
        animationDelay: `${Math.random() * 5}s`, // Stagger animations for a more natural effect
      },
    }));
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {clouds.map(cloud => (
        <CloudIcon
          key={cloud.id}
          className="absolute text-sky-200 opacity-20 cloud-floating"
          size={cloud.size}
          style={cloud.style}
        />
      ))}
    </div>
  );
};

export default React.memo(FloatingClouds);