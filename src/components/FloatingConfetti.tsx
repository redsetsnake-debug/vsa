import { motion } from 'motion/react';
import { useMemo } from 'react';

type ShapeType = 'rectangle' | 'circle' | 'capsule' | 'strip';

interface ConfettiParticle {
  id: number;
  shape: ShapeType;
  color: string;
  size: { width: number; height: number };
  left: number; // percentage position across the viewport
  duration: number; // sliding duration
  delay: number; // random negative delay to scatter instantly on load
  scale: number;
  rotateDirection: number; // 1 or -1 for spin
  swayRange: number; // horizontal sway distance
}

// Crisp, vibrant pastel-neon brand colors matching the reference image perfectly
const CONFETTI_COLORS = [
  '#3b82f6', // Bright Sky Blue
  '#60a5fa', // Light Pastel Blue
  '#8b5cf6', // Indigo Violet
  '#a78bfa', // Light Lavender Purple
  '#f43f5e', // Sweet Strawberry Red
  '#fb923c', // Warm Golden Orange
  '#2dd4bf', // Teal Cyan
  '#10b981', // Vivid Mint Green
  '#f472b6', // Cotton Candy Pink
  '#e879f9', // Bright Orchid Magenta
];

const SHAPES: ShapeType[] = ['rectangle', 'circle', 'capsule', 'strip'];

export default function FloatingConfetti() {
  // Generate 24 particles for a perfectly balanced, elegant and subtle viewport density
  const particles = useMemo(() => {
    const list: ConfettiParticle[] = [];
    const count = 24;
    
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 98 + 1; // 1% to 99% of screen width
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      
      // Determine elegant sizes for high fidelity and pop-art aesthetic
      let width = 12;
      let height = 8;
      if (shape === 'circle') {
        width = height = Math.random() * 5 + 8; // 8px to 13px
      } else if (shape === 'capsule') {
        width = Math.random() * 6 + 14; // 14px to 20px
        height = Math.random() * 2 + 6;  // 6px to 8px
      } else if (shape === 'strip') {
        width = Math.random() * 6 + 16; // 16px to 22px
        height = Math.random() * 1.5 + 4;  // 4px to 5.5px
      } else { // rectangle
        width = Math.random() * 6 + 12; // 12px to 18px
        height = Math.random() * 4 + 8;  // 8px to 12px
      }

      // We want a slow, uniform drift downward (10s to 18s across 120% of viewport)
      const duration = Math.random() * 6 + 10; 
      // Uniform negative delay to scatter them instantly from top to bottom on initial render
      const delay = Math.random() * -duration;

      list.push({
        id: i,
        shape,
        color,
        size: { width, height },
        left,
        duration,
        delay,
        scale: Math.random() * 0.4 + 0.75, // 0.75 to 1.15
        rotateDirection: Math.random() > 0.5 ? 1 : -1,
        swayRange: Math.random() * 30 + 15, // 15px to 45px horizontal translation
      });
    }
    return list;
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none select-none z-10 overflow-hidden">
      {particles.map((p) => {
        // Customize border values based on geometries
        let borderRadius = '0px';
        let transformSkew = 'none';

        if (p.shape === 'circle') {
          borderRadius = '9999px';
        } else if (p.shape === 'capsule') {
          borderRadius = '9999px';
        } else if (p.shape === 'strip') {
          borderRadius = '1px';
          transformSkew = 'skewX(12deg)';
        } else {
          borderRadius = '2px';
        }

        return (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.left}%`,
              width: `${p.size.width}px`,
              height: `${p.size.height}px`,
              backgroundColor: p.color,
              borderRadius: borderRadius,
              transform: transformSkew,
              boxShadow: '1px 1px 3px rgba(0,0,0,0.12)',
              opacity: 0.9,
            }}
            animate={{
              // Falling from slightly above the viewport to slightly below
              y: ['-10vh', '110vh'],
              // Gentle back-and-forth horizontal sway
              x: [0, p.swayRange, -p.swayRange, 0],
              // Steady, uniform 3D twisting
              rotateX: [0, p.rotateDirection * 360],
              rotateY: [0, p.rotateDirection * 720],
              rotateZ: [0, p.rotateDirection * 180],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear", // Ensures perfectly uniform falling speed (匀速)
              delay: p.delay,
            }}
          />
        );
      })}
    </div>
  );
}
