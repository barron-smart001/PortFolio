import { useEffect, useRef } from "react";

/**
 * AntigravityBackground
 * A full-screen particle field inspired by the Google Antigravity hero:
 * hundreds of small capsule "dashes" float in place, get pushed into a ring
 * around the cursor, rotate to face away from it, then spring back.
 *
 * Usage: <AntigravityBackground />  (place it as the first child of the page)
 */
export default function AntigravityBackground({
  colors = [
    "#1D4ED8", "#1D4ED8", "#1D4ED8", // weighted: mostly your brand blue
    "#3B82F6", "#6366F1",
    "#EF4444", "#F59E0B", "#10B981",
  ],
  density = 1, // 0.5 = fewer particles, 1.5 = more
  radius = 170, // size of the cursor "bubble" in px
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
    let dpr = 1;
    let particles = [];
    let frameId = null;
    let t = 0;

    // Pointer state (smoothed). `active` is false when the pointer is idle or gone,
    // in which case a virtual cursor wanders slowly so the field stays alive (mobile too).
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false, lastMove: 0 };

    const rand = (min, max) => Math.random() * (max - min) + min;

    // Shortest-path angle interpolation so dashes never spin the long way round.
    const lerpAngle = (a, b, f) => {
      let d = b - a;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      return a + d * f;
    };

    const createParticles = () => {
      const area = width * height;
      const count = Math.round(Math.min(1100, Math.max(220, (area / 1500) * density)));

      // Jittered grid gives an even, organic spread with no clumps or holes.
      const cols = Math.ceil(Math.sqrt((count * width) / height));
      const rows = Math.ceil(count / cols);
      const cellW = width / cols;
      const cellH = height / rows;

      particles = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = (c + rand(0.15, 0.85)) * cellW;
          const hy = (r + rand(0.15, 0.85)) * cellH;
          const baseAngle = rand(0, Math.PI * 2);
          particles.push({
            hx, hy, // home position
            x: hx, y: hy,
            vx: 0, vy: 0,
            angle: baseAngle,
            baseAngle,
            spin: rand(-0.004, 0.004),
            len: rand(4, 9),
            thick: rand(1.6, 2.4),
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: rand(0.35, 0.75),
            phase: rand(0, Math.PI * 2),
            drift: rand(4, 10),
            scale: 1,
          });
        }
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
      if (reduceMotion) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      for (const p of particles) {
        const half = (p.len * p.scale) / 2;
        const cos = Math.cos(p.angle) * half;
        const sin = Math.sin(p.angle) * half;
        ctx.globalAlpha = Math.min(1, p.alpha * (0.75 + p.scale * 0.35));
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.thick * (0.85 + p.scale * 0.15);
        ctx.beginPath();
        ctx.moveTo(p.x - cos, p.y - sin);
        ctx.lineTo(p.x + cos, p.y + sin);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const update = () => {
      t += 1;

      // Fall back to a slow wandering virtual cursor after 2.5s without movement.
      const idle = !pointer.active || performance.now() - pointer.lastMove > 2500;
      if (idle) {
        pointer.tx = width * (0.5 + 0.32 * Math.sin(t * 0.0035));
        pointer.ty = height * (0.45 + 0.28 * Math.sin(t * 0.0052 + 1.3));
      }
      if (pointer.x < -9000) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
      const follow = idle ? 0.03 : 0.16;
      pointer.x += (pointer.tx - pointer.x) * follow;
      pointer.y += (pointer.ty - pointer.y) * follow;

      const R = Math.min(radius, Math.max(110, width * 0.16));
      const R2 = R * R;
      const outer = R * 1.7;
      const outer2 = outer * outer;

      for (const p of particles) {
        // Floating target: home position plus a gentle breathing drift.
        const tx = p.hx + Math.sin(t * 0.012 + p.phase) * p.drift;
        const ty = p.hy + Math.cos(t * 0.01 + p.phase * 1.3) * p.drift;

        // Spring toward the floating target.
        p.vx += (tx - p.x) * 0.035;
        p.vy += (ty - p.y) * 0.035;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const d2 = dx * dx + dy * dy;
        let targetScale = 1;
        let targetAngle = p.baseAngle;

        if (d2 < outer2) {
          const d = Math.sqrt(d2) || 0.001;
          const nx = dx / d;
          const ny = dy / d;
          targetAngle = Math.atan2(ny, nx); // face away from the cursor

          if (d2 < R2) {
            // Push outward (strongest at the centre) plus a little swirl.
            const f = 1 - d / R;
            const push = f * f * 5.5;
            p.vx += nx * push - ny * f * 0.6;
            p.vy += ny * push + nx * f * 0.6;
          }
          // Particles grow a little as they ride the ring edge.
          const ring = 1 - Math.abs(d - R) / (outer - R * 0.4);
          targetScale = 1 + Math.max(0, ring) * 0.9;
          p.angle = lerpAngle(p.angle, targetAngle, 0.18);
        } else {
          p.baseAngle += p.spin;
          p.angle = lerpAngle(p.angle, targetAngle, 0.04);
        }

        p.vx *= 0.82; // damping
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;
        p.scale += (targetScale - p.scale) * 0.12;
      }
    };

    const loop = () => {
      update();
      draw();
      frameId = requestAnimationFrame(loop);
    };

    const onPointerMove = (e) => {
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
      pointer.active = true;
      pointer.lastMove = performance.now();
    };
    const onPointerLeave = () => {
      pointer.active = false;
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
  }, [density, radius]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
