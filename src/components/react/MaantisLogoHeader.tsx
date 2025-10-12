import React, { useState, useEffect } from 'react';

interface MaantisLogoHeaderProps {
  autoRotate?: boolean;
}

export default function MaantisLogoHeader({ autoRotate = true }: MaantisLogoHeaderProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    if (autoRotate) {
      let start = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - start) / 1000;
        setRotationAngle(elapsed * 30);
        requestAnimationFrame(animate);
      };
      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, [autoRotate]);

  const v = {
    primary: '#00d9ff',
    secondary: '#0496ff',
    accent: '#00ffff',
  };

  const rotY = rotationAngle;
  const rotX = Math.sin(rotationAngle * Math.PI / 180) * 15;

  return (
    <div
      className="flex items-center gap-3 sm:gap-2 max-sm:gap-[0.4rem]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ cursor: 'pointer' }}
    >
      <svg
        width="40"
        height="40"
        className="sm:w-8 sm:h-8 max-sm:w-7 max-sm:h-7"
        viewBox="0 0 200 200"
        fill="none"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <defs>
          <filter id="glow-header">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="sphereGrad-header">
            <stop offset="0%" stopColor={v.accent} stopOpacity="0.8"/>
            <stop offset="50%" stopColor={v.primary} stopOpacity="0.6"/>
            <stop offset="100%" stopColor={v.secondary} stopOpacity="0.3"/>
          </radialGradient>
        </defs>

        <g transform="translate(100, 100)">
          {/* 16 photoreceptor rays */}
          {[...Array(16)].map((_, i) => {
            const latAngle = (i * 22.5 * Math.PI) / 180;
            const baseX = Math.cos(latAngle) * 50;
            const baseY = Math.sin(latAngle) * 50;
            const baseZ = 0;

            const rotYRad = (rotY + i * 22.5) * Math.PI / 180;
            const x1 = baseX * Math.cos(rotYRad) - baseZ * Math.sin(rotYRad);
            const z1 = baseX * Math.sin(rotYRad) + baseZ * Math.cos(rotYRad);
            const y1 = baseY;

            const rotXRad = rotX * Math.PI / 180;
            const y2 = y1 * Math.cos(rotXRad) - z1 * Math.sin(rotXRad);
            const z2 = y1 * Math.sin(rotXRad) + z1 * Math.cos(rotXRad);
            const x2 = x1;

            const scale = 800 / (800 + z2);
            const projX = x2 * scale;
            const projY = y2 * scale;

            const depth = (z2 + 50) / 100;
            const opacity = 0.3 + depth * 0.7;
            const strokeWidth = 2 + depth * 2;

            const innerRadius = 15;
            const innerX = (Math.cos(latAngle) * innerRadius) * Math.cos(rotYRad);
            const innerZ = (Math.cos(latAngle) * innerRadius) * Math.sin(rotYRad);
            const innerY = Math.sin(latAngle) * innerRadius;

            const innerY2 = innerY * Math.cos(rotXRad) - innerZ * Math.sin(rotXRad);
            const innerZ2 = innerY * Math.sin(rotXRad) + innerZ * Math.cos(rotXRad);

            const innerScale = 800 / (800 + innerZ2);
            const innerProjX = innerX * innerScale;
            const innerProjY = innerY2 * innerScale;

            return (
              <g key={i} filter="url(#glow-header)">
                <line
                  x1={innerProjX}
                  y1={innerProjY}
                  x2={projX}
                  y2={projY}
                  stroke={depth > 0.5 ? v.primary : v.secondary}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  opacity={opacity}
                />
                {depth > 0.6 && (
                  <circle
                    cx={projX}
                    cy={projY}
                    r={2 * depth}
                    fill={v.accent}
                    opacity={opacity * 0.8}
                  />
                )}
              </g>
            );
          })}

          {/* Central core */}
          <circle
            r="12"
            fill="url(#sphereGrad-header)"
            filter="url(#glow-header)"
            opacity="0.6"
          />
          <circle
            r="8"
            fill={v.primary}
            filter="url(#glow-header)"
            opacity="0.8"
          />
          <circle r="4" fill={v.accent} opacity="0.95" />
          <circle r="2" fill="#ffffff" />
        </g>
      </svg>

      <div className="flex flex-col">
        <span
          className="text-xl sm:text-base max-sm:text-sm font-extralight tracking-[0.3em] sm:tracking-[0.2em] max-sm:tracking-[0.15em]"
          style={{
            color: v.primary,
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            textShadow: `0 0 20px ${v.primary}30`,
            lineHeight: '1.2'
          }}
        >
          MAANTIS
        </span>
      </div>
    </div>
  );
}
