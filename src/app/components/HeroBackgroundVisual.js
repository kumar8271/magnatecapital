'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackgroundVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width = 0;
    let height = 0;
    const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.04;
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.04;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 1. Particle Matrix Nodes
    const particleCount = 45;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? 'rgba(0, 64, 233, ' : 'rgba(56, 189, 248, ',
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    let time = 0;

    // Helper: Draw 3D Embossed Rotating Coin
    const drawCoin = (centerX, centerY, radius, symbol, angle, tiltAngle, primaryColor, secondaryColor) => {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(tiltAngle);

      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      // Perspective Scale
      const scaleX = cos;
      const thickness = 14;

      // Outer Ambient Glow
      const glowGrad = ctx.createRadialGradient(0, 0, radius * 0.5, 0, 0, radius * 1.8);
      glowGrad.addColorStop(0, primaryColor + '0.35)');
      glowGrad.addColorStop(0.5, secondaryColor + '0.15)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Draw Coin Thickness (Side Rim)
      if (Math.abs(scaleX) > 0.05) {
        ctx.fillStyle = 'rgba(5, 10, 30, 0.9)';
        ctx.strokeStyle = primaryColor + '0.8)';
        ctx.lineWidth = 1.5;

        for (let t = -thickness / 2; t <= thickness / 2; t += 2) {
          ctx.beginPath();
          ctx.ellipse(t * sin, 0, radius * Math.abs(scaleX), radius, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Front Face Ellipse
      ctx.save();
      ctx.scale(scaleX, 1);

      // Face Metallic Gradient
      const faceGrad = ctx.createLinearGradient(-radius, -radius, radius, radius);
      if (cos > 0) {
        faceGrad.addColorStop(0, '#0A1338');
        faceGrad.addColorStop(0.3, '#0040E9');
        faceGrad.addColorStop(0.7, '#070C1E');
        faceGrad.addColorStop(1, '#38BDF8');
      } else {
        faceGrad.addColorStop(0, '#38BDF8');
        faceGrad.addColorStop(0.4, '#0040E9');
        faceGrad.addColorStop(0.8, '#0A1338');
        faceGrad.addColorStop(1, '#050814');
      }

      ctx.fillStyle = faceGrad;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Neon Rim Border
      ctx.strokeStyle = cos > 0 ? '#38BDF8' : '#0040E9';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Inner Concentric Ring
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.82, 0, Math.PI * 2);
      ctx.stroke();

      // Inner Micro Tech Ticks
      const tickCount = 24;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1;
      for (let i = 0; i < tickCount; i++) {
        const a = (i / tickCount) * Math.PI * 2;
        const x1 = Math.cos(a) * (radius * 0.85);
        const y1 = Math.sin(a) * (radius * 0.85);
        const x2 = Math.cos(a) * (radius * 0.92);
        const y2 = Math.sin(a) * (radius * 0.92);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Embossed Coin Symbol (₿ or ₹)
      if (Math.abs(scaleX) > 0.2) {
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#38BDF8';
        ctx.shadowBlur = 12;
        ctx.font = `bold ${radius * 0.9}px "Inter", "Helvetica Neue", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(symbol, 0, 2);
        ctx.shadowBlur = 0;
      }

      ctx.restore();
      ctx.restore();
    };

    // Render Animation Loop
    const render = () => {
      time += 0.018;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Background Cyber Grid
      ctx.strokeStyle = 'rgba(0, 64, 233, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      const offsetX = (time * 10) % gridSize;
      const offsetY = (time * 10) % gridSize;

      for (let x = -gridSize + offsetX; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = -gridSize + offsetY; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Dynamic Connecting Particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with glowing lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.strokeStyle = `rgba(0, 64, 233, ${0.18 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // 3D Orbital Rings in the background
      const ringCenterX = width > 900 ? width * 0.72 + mouseX : width * 0.5 + mouseX;
      const ringCenterY = height * 0.48 + mouseY;

      ctx.save();
      ctx.translate(ringCenterX, ringCenterY);
      
      // Ring 1
      ctx.strokeStyle = 'rgba(0, 64, 233, 0.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 260, 110, time * 0.3, 0, Math.PI * 2);
      ctx.stroke();

      // Ring 2 (Opposite spin)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 310, 130, -time * 0.2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Draw Main 3D Floating Bitcoin Coin (₿)
      const btcX = width > 900 ? width * 0.68 + mouseX : width * 0.42 + mouseX;
      const btcY = height * 0.42 + Math.sin(time * 1.5) * 16 + mouseY;
      const btcRadius = width > 768 ? 95 : 70;
      drawCoin(btcX, btcY, btcRadius, '₿', time, -0.15, 'rgba(0, 64, 233, ', 'rgba(56, 189, 248, ');

      // Draw Supporting 3D Floating Indian Rupee Coin (₹)
      const inrX = width > 900 ? width * 0.84 + mouseX * 1.2 : width * 0.74 + mouseX * 1.2;
      const inrY = height * 0.60 + Math.cos(time * 1.3) * 14 + mouseY * 1.2;
      const inrRadius = width > 768 ? 72 : 55;
      drawCoin(inrX, inrY, inrRadius, '₹', -time * 0.9 + 1.2, 0.22, 'rgba(56, 189, 248, ', 'rgba(0, 64, 233, ');

      // Soft vignette bottom & edge gradient overlay
      const vignette = ctx.createLinearGradient(0, height * 0.7, 0, height);
      vignette.addColorStop(0, 'rgba(1, 1, 8, 0)');
      vignette.addColorStop(1, '#010108');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, height * 0.7, width, height * 0.3);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="hero-background-visual"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block' 
        }} 
      />
    </div>
  );
}
