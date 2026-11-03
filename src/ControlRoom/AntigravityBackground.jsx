import { useEffect, useRef } from "react";

/**
 * AntigravityBackground
 * A full-screen grid with an animated dot at every joint. Faint dark lines
 * turn blue and glow toward the bottom edge; the dots pulse in a traveling
 * wave and swell around the cursor.
 *
 * Usage: <AntigravityBackground />  (place it as the first child of the page)
 */
export default function AntigravityBackground({
  size = 48, // grid cell size in px
  glow = "29, 78, 216", // rgb of the bottom glow
  radius = 140, // cursor influence in px
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let frameId = null;
    let t = 0;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const R2 = radius * radius;

      for (let y = 0.5; y < height + size; y += size) {
        for (let x = 0.5; x < width + size; x += size) {
          // Diagonal wave rolling across the grid.
          const wave = Math.sin(x * 0.012 + y * 0.008 - t * 0.04);
          let r = 1.8 + wave * 0.9;
          let alpha = 0.45 + wave * 0.3;

          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const f = 1 - Math.sqrt(d2) / radius;
            r += f * f * 3.5;
            alpha += f * 0.4;
          }

          ctx.globalAlpha = Math.min(1, Math.max(0.1, alpha));
          ctx.fillStyle = y > height * 0.5 ? `rgb(${glow})` : "#000";
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.5, r), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      t += 1;
      pointer.x += (pointer.tx - pointer.x) * 0.2;
      pointer.y += (pointer.ty - pointer.y) * 0.2;
      draw();
      frameId = requestAnimationFrame(loop);
    };

    const onPointerMove = (e) => {
      if (pointer.x < -9000) {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
      }
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
    };
    const onPointerLeave = () => {
      pointer.x = pointer.tx = -9999;
      pointer.y = pointer.ty = -9999;
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
        frameId = null;
      } else if (!reduceMotion && frameId === null) {
        frameId = requestAnimationFrame(loop);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
      document.addEventListener("visibilitychange", onVisibility);
      frameId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, glow, radius]);

  const grid = (color) =>
    `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      {/* Base grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: grid("rgba(0, 0, 0, 0.08)"),
          backgroundSize: `${size}px ${size}px`,
          // Black lines fade out exactly where the blue ones fade in, so they never overlap.
          WebkitMaskImage: "linear-gradient(to top, transparent 45%, black 55%)",
          maskImage: "linear-gradient(to top, transparent 45%, black 55%)",
        }}
      />

      {/* Blue glow rising from the bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, rgba(${glow}, 0.22), rgba(${glow}, 0) 45%)`,
        }}
      />

      {/* Brighter blue grid lines, only visible near the bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: grid(`rgba(${glow}, 0.35)`),
          backgroundSize: `${size}px ${size}px`,
          WebkitMaskImage: "linear-gradient(to top, black 45%, transparent 55%)",
          maskImage: "linear-gradient(to top, black 45%, transparent 55%)",
        }}
      />

      {/* Animated dots on every joint */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />
    </div>
  );
}
