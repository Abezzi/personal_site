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
      fpsLimit: 30,
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: { enable: true },
        },
      },
      particles: {
        color: { value: "#bdbdbd" },
        number: {
          density: {
            enable: true,
            area: 1080,
          },
          value: 400,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 0.25,
            sync: false,
          },
          random: {
            enable: true,
            minimumValue: 0.05,
          },
          value: 1,
        },
        shape: { type: "circle" as const },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
      },
      detectRetina: false,
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
