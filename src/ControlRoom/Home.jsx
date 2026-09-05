import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let time = 0;
    
    // Dynamic interactive coordinate tracking
    const mouse = {
      x: null,
      y: null,
      targetX: null,
      targetY: null
    };

    // Configuration parameters matching the official site layout
    const ROWS = 15;
    const COLS = 25;
    const COLORS = ["#1D4ED8", "#EF4444"]; // Google Antigravity branded shards

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid();
    };

    // Particle Struct setup
    class WaveParticle {
      constructor(gridX, gridY) {
        this.gridX = gridX; // Structural grid columns
        this.gridY = gridY; // Structural grid rows
        
        this.size = Math.random() * 2 + 1.5;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.opacity = Math.random() * 0.4 + 0.2;
        this.shapeType = Math.floor(Math.random() * 3); // Shard variations (Circles, squares, triangles)
        this.rotation = Math.random() * Math.PI * 2;
        
        // Base anchor positions across viewport boundaries
        this.anchorX = 0;
        this.anchorY = 0;
        
        // Real-time calculated coordinates
        this.x = 0;
        this.y = 0;
      }

      update(time, mouseX, mouseY) {
        // Distribute baseline positions perfectly across coordinates
        this.anchorX = (canvas.width / (COLS - 1)) * this.gridX;
        this.anchorY = (canvas.height / (ROWS - 1)) * this.gridY;

        // Base background wave math oscillation (Floating state)
        let offsetX = Math.sin(time * 0.02 + this.gridY) * 8;
        let offsetY = Math.cos(time * 0.015 + this.gridX) * 12;

        // Active cursor wave ripples distortion calculations
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - this.anchorX;
          const dy = mouseY - this.anchorY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Influence bubble setting
          const waveRadius = 320;

          if (distance < waveRadius) {
            // Generates a ripple pushing force that follows the track shape
            const force = (waveRadius - distance) / waveRadius;
            const waveInertia = Math.sin(distance * 0.05 - time * 0.1) * 25;

            offsetX += (dx / distance) * waveInertia * force;
            offsetY += (dy / distance) * waveInertia * force;
          }
        }

        this.x = this.anchorX + offsetX;
        this.y = this.anchorY + offsetY;
        this.rotation += 0.005;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        if (this.shapeType === 0) {
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        } else if (this.shapeType === 1) {
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else {
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(this.size / 2, this.size / 2);
          ctx.lineTo(-this.size / 2, this.size / 2);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    const initGrid = () => {
      particles = [];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          particles.push(new WaveParticle(c, r));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      // Linear interpolation to make the mouse coordinate mapping buttery smooth
      if (mouse.targetX !== null && mouse.targetY !== null) {
        if (mouse.x === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        }
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      } else {
        mouse.x = null;
        mouse.y = null;
      }

      particles.forEach((particle) => {
        particle.update(time, mouse.x, mouse.y);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F5] px-6 py-16 text-black sm:px-8 md:px-12 lg:px-12">

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Antigravity Fluid Wave Mesh Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-65 mix-blend-multiply"
        />

        {/* Large moving blue glow */}
        <div
          className="
            absolute
            -left-32
            -top-32
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#1D4ED8]/10
            blur-[90px]
            animate-[orbOne_10s_ease-in-out_infinite]
          "
        />

        {/* Second moving glow */}
        <div
          className="
            absolute
            -right-32
            top-[25%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#1D4ED8]/10
            blur-[100px]
            animate-[orbTwo_10s_ease-in-out_infinite]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-180px]
            left-[25%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#1D4ED8]/[0.07]
            blur-[110px]
            animate-[orbThree_10s_ease-in-out_infinite]
          "
        />

        {/* Rotating decorative ring */}
        <div
          className="
            absolute
            -right-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#1D4ED8]/10
            animate-[spinSlow_25s_linear_infinite]
          "
        />

        <div
          className="
            absolute
            -right-28
            top-32
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-[#1D4ED8]/10
            animate-[spinReverse_18s_linear_infinite]
          "
        />
      </div>
      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto max-w-4xl">

        {/* =======================================================
            HERO
        ======================================================== */}
        <section className="mb-20 sm:mb-24">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#EEEDEA] px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-blue-600 opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-600" />
            </span>

            WEB DEVELOPER — Akwa Ibom, NG
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            I build digital products that{" "}
            <span className="text-[#1D4ED8]">
              stand out.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Frontend developer focused on building modern, scalable and
            visually refined web applications. I turn ideas into practical
            digital products using clean interfaces, thoughtful UX and
            maintainable code.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/Project"
              className="
                group
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                bg-black
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-gray-800
                hover:shadow-lg
                active:scale-95
              "
            >
              View projects

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/Contact"
              className="
                group
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-black
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gray-300
                hover:bg-gray-50
                hover:shadow-md
                active:scale-95
              "
            >
              Get in touch

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

          </div>

        </section>

        {/* =======================================================
            DIVIDER
        ======================================================== */}
        <div className="relative mb-16 sm:mb-20">
          <div className="h-px bg-gray-200" />

          <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#1D4ED8]" />
        </div>

        {/* =======================================================
            AT A GLANCE
        ======================================================== */}
        <section className="mb-20 sm:mb-24">

          {/* Section Heading */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                At a Glance
              </span>

              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                A snapshot of my work.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500 sm:text-right">
              Building practical products across fintech, education and
              modern web experiences.
            </p>

          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

            {/* Products */}
            <div className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6">
              <span className="block text-3xl font-black tracking-tight sm:text-4xl">
                5+
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
                Products Built
              </span>
            </div>

            {/* Fintech */}
            <div className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6">
              <span className="block text-3xl font-black tracking-tight sm:text-4xl">
                2
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
                Fintech Projects
              </span>
            </div>

            {/* Stack */}
            <div className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6">
              <span className="block text-3xl font-black tracking-tight sm:text-4xl">
                5+
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
                Core Technologies
              </span>
            </div>

            {/* Experience */}
            <div className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6">
              <span className="block text-3xl font-black tracking-tight sm:text-4xl">
                1+
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
                Year Building
              </span>
            </div>

          </div>

        </section>

        {/* =======================================================
            CURRENT FOCUS
        ======================================================== */}
        <section className="border-t border-gray-200 py-16 sm:py-20">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                Current Focus
              </span>

              <h2 className="mt-3 max-w-xl text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                Building products,
                <br className="hidden sm:block" />
                not just interfaces.
              </h2>
            </div>

            <Link
              to="/Project"
              className="group inline-flex w-fit items-center text-sm font-bold"
            >
              View all projects

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </section>

      </div>

      {/* =========================================================
          CSS ANIMATIONS
      ========================================================== */}
      <style>{`
        @keyframes orbOne {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(120px, 80px) scale(1.2);
          }
        }

        @keyframes orbTwo {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-100px, 100px) scale(1.15);
          }
        }

        @keyframes orbThree {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(80px, -70px) scale(1.2);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
