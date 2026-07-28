import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);

  // Raw cursor position values
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Smooth springs with fluid physics for organic inertia
  const springConfig1 = { stiffness: 35, damping: 25, mass: 0.8 };
  const springConfig2 = { stiffness: 20, damping: 30, mass: 1.2 };
  const springConfig3 = { stiffness: 15, damping: 35, mass: 1.5 };

  const mouseX1 = useSpring(rawMouseX, springConfig1);
  const mouseY1 = useSpring(rawMouseY, springConfig1);

  const mouseX2 = useSpring(rawMouseX, springConfig2);
  const mouseY2 = useSpring(rawMouseY, springConfig2);

  const mouseX3 = useSpring(rawMouseX, springConfig3);
  const mouseY3 = useSpring(rawMouseY, springConfig3);

  // Parallax calculations for relative movement
  const orb1X = useTransform(mouseX1, (val) => val * 0.08);
  const orb1Y = useTransform(mouseY1, (val) => val * 0.08);

  const orb2X = useTransform(mouseX2, (val) => val * -0.06);
  const orb2Y = useTransform(mouseY2, (val) => val * -0.06);

  const orb3X = useTransform(mouseX3, (val) => val * 0.12);
  const orb3Y = useTransform(mouseY3, (val) => val * 0.04);

  // Spotlight follow spring (fast & smooth)
  const spotlightX = useSpring(rawMouseX, { stiffness: 120, damping: 20 });
  const spotlightY = useSpring(rawMouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 3;
    rawMouseX.set(0);
    rawMouseY.set(0);

    const handlePointerMove = (e: PointerEvent) => {
      // Offset from screen center for subtle parallax
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      rawMouseX.set(e.clientX - centerX);
      rawMouseY.set(e.clientY - centerY);

      spotlightX.set(e.clientX);
      spotlightY.set(e.clientY);
    };

    // Set initial spotlight pos
    spotlightX.set(initialX);
    spotlightY.set(initialY);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [rawMouseX, rawMouseY, spotlightX, spotlightY]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Base ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950" />

      {/* Subtle pointer spotlight */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
        style={{
          x: spotlightX,
          y: spotlightY,
          background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Organic Floating Orb 1 (Cyan/Teal Accent) */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] sm:h-[500px] rounded-full opacity-30 blur-[100px]"
        style={{
          x: orb1X,
          y: orb1Y,
          background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.3) 0%, rgba(16,185,129,0.1) 50%, transparent 80%)',
        }}
        animate={{
          scale: [1, 1.08, 0.95, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Organic Floating Orb 2 (Violet/Indigo Deep Accent) */}
      <motion.div
        className="absolute top-2/3 right-1/4 translate-x-1/4 -translate-y-1/2 w-[450px] sm:w-[650px] h-[400px] sm:h-[550px] rounded-full opacity-25 blur-[120px]"
        style={{
          x: orb2X,
          y: orb2Y,
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.35) 0%, rgba(139,92,246,0.15) 50%, transparent 75%)',
        }}
        animate={{
          scale: [1, 0.92, 1.06, 1],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Organic Floating Orb 3 (Warm Amber/Rose Ambient) */}
      <motion.div
        className="absolute top-1/3 left-1/6 -translate-y-1/2 w-[400px] sm:w-[500px] h-[300px] sm:h-[400px] rounded-full opacity-15 blur-[90px]"
        style={{
          x: orb3X,
          y: orb3Y,
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.25) 0%, rgba(244,63,94,0.1) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.12, 0.9, 1],
          x: [0, 20, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Elegant SVG mesh pattern overlay with low opacity */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5aDQwVjBIMzl2NDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-[0.025] mix-blend-overlay" />

      {/* Very faint noise texture for luxury feel */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay" 
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}
