import React, { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const STAR_COUNT = 120;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.5,
        alpha: Math.random(),
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      stars.forEach(star => {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        // Animate
        star.x += star.dx;
        star.y += star.dy;
        star.alpha += (Math.random() - 0.5) * 0.02;
        if (star.x < 0 || star.x > w) star.dx *= -1;
        if (star.y < 0 || star.y > h) star.dy *= -1;
        if (star.alpha < 0.3) star.alpha = 0.3;
        if (star.alpha > 1) star.alpha = 1;
      });
      requestAnimationFrame(draw);
    }
    draw();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    />
  );
};

export default StarsBackground;
