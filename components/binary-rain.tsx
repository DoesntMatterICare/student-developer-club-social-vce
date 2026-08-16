"use client";

import { useEffect, useRef } from "react";

type RainStream = {
  gold: boolean;
  length: number;
  seed: number;
  speed: number;
  x: number;
  y: number;
};

export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frameId: number | undefined;
    let height = 0;
    let isPaused = document.hidden;
    let lastTime = performance.now();
    let streams: RainStream[] = [];
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isCompact = () => window.innerWidth < 640;
    const streamCount = () => {
      const lowPower = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
      if (isCompact()) return 9;
      return lowPower ? 14 : 18;
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const { innerWidth, innerHeight } = window;
      canvas.width = Math.ceil(innerWidth * ratio);
      canvas.height = Math.ceil(innerHeight * ratio);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      height = innerHeight;
      streams = Array.from({ length: streamCount() }, (_, index) => ({
        gold: index % 9 === 0,
        length: 7 + ((index * 3) % 7),
        seed: index * 17,
        speed: 56 + ((index * 11) % 31),
        x: ((index + 1) / (streamCount() + 1)) * innerWidth,
        y: -((index * 83) % (innerHeight + 180)),
      }));
    };

    const draw = (staticFrame = false) => {
      const { innerWidth, innerHeight } = window;
      context.clearRect(0, 0, innerWidth, innerHeight);
      const fontSize = isCompact() ? 11 : 12;
      const lineHeight = fontSize * 1.65;
      context.font = `500 ${fontSize}px "JetBrains Mono", monospace`;
      context.textBaseline = "top";

      streams.forEach((stream, streamIndex) => {
        const top = staticFrame ? ((streamIndex * 97) % (innerHeight + 120)) - 80 : stream.y;
        for (let trailIndex = 0; trailIndex < stream.length; trailIndex += 1) {
          const y = top - trailIndex * lineHeight;
          if (y < -lineHeight || y > innerHeight + lineHeight) continue;
          const isHead = trailIndex === 0;
          const alpha = (1 - trailIndex / stream.length) * (stream.gold && isHead ? 0.7 : 0.28);
          context.shadowBlur = isHead ? 15 : 0;
          context.shadowColor = stream.gold ? "rgba(255, 194, 94, 0.9)" : "rgba(176, 77, 255, 0.95)";
          context.fillStyle = stream.gold && isHead
            ? `rgba(255, 208, 120, ${alpha})`
            : `rgba(190, 125, 255, ${alpha})`;
          context.fillText(String((stream.seed + trailIndex) % 2), stream.x, y);
        }
      });
    };

    const animate = (time: number) => {
      if (isPaused || motionQuery.matches) return;
      const delta = Math.min((time - lastTime) / 1000, 0.08);
      lastTime = time;
      streams.forEach((stream) => {
        stream.y += stream.speed * delta;
        if (stream.y - stream.length * 18 > height) stream.y = -16;
      });
      draw();
      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      window.cancelAnimationFrame(frameId ?? 0);
      draw(motionQuery.matches);
      if (!isPaused && !motionQuery.matches) {
        lastTime = performance.now();
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const onResize = () => { resize(); start(); };
    const onVisibilityChange = () => {
      isPaused = document.hidden;
      if (isPaused) window.cancelAnimationFrame(frameId ?? 0);
      else start();
    };

    resize();
    start();
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    motionQuery.addEventListener("change", start);

    return () => {
      window.cancelAnimationFrame(frameId ?? 0);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionQuery.removeEventListener("change", start);
    };
  }, []);

  return <canvas ref={canvasRef} className="binary-rain" aria-hidden="true" />;
}





