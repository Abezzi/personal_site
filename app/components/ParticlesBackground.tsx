// app/components/ParticlesBackground.tsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // One-time engine init
  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => setInit(true));
    }
  }, [init]);

  const options = useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      particles: {
        color: { value: "#94a3b8" },
        links: { color: "#94a3b8", distance: 150, enable: true, opacity: 0.2 },
        move: {
          enable: true,
          speed: 1,
          direction: "none" as const,
          random: false,
          straight: false,
          outModes: { default: "bounce" as const },
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.3 },
        shape: { type: "circle" as const },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles-bg"
      options={options}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  );
};
