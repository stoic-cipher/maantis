import React, { useState, useEffect } from 'react';

interface MaantisLogoIconProps {
  size?: 'small' | 'medium' | 'large';
  interactive?: boolean;
  showText?: boolean;
  variant?: 'neural' | 'quantum' | 'agentic' | 'mono';
  autoRotate?: boolean;
}

export default function MaantisLogoIcon({
  size = 'medium',
  interactive = true,
  showText = false,
  variant = 'neural',
  autoRotate = false
}: MaantisLogoIconProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    // Auto-rotate continuously
    if (autoRotate) {
      let start = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - start) / 1000;
        setRotationAngle(elapsed * 30); // 30 degrees per second for continuous rotation
        requestAnimationFrame(animate);
      };
      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }

    // Interactive rotation (on hover)
    if (!interactive || !isHovering) {
      setRotationAngle(0);
      return;
    }

    let start = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - start) / 1000;
      setRotationAngle(elapsed * 60); // 60 degrees per second on hover
      if (isHovering) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isHovering, interactive, autoRotate]);

  const variants = {
    neural: {
      primary: '#00d9ff',
      secondary: '#0496ff',
      accent: '#00ffff',
    },
    quantum: {
      primary: '#10b981',
      secondary: '#06ffa5',
      accent: '#00ff88',
    },
    agentic: {
      primary: '#a855f7',
      secondary: '#8b5cf6',
      accent: '#c084fc',
    },
    mono: {
      primary: '#ffffff',
      secondary: '#e5e5e5',
      accent: '#cccccc',
    }
  };

  const v = variants[variant];

  // Size mappings
  const sizes = {
    small: { width: 40, height: 40, viewBox: '0 0 200 200' },
    medium: { width: 80, height: 80, viewBox: '0 0 200 200' },
    large: { width: 200, height: 200, viewBox: '0 0 200 200' }
  };

  const dimensions = sizes[size];

  // Calculate 3D rotation values
  const rotY = rotationAngle;
  const rotX = Math.sin(rotationAngle * Math.PI / 180) * 15;

  return (
    <div
      className="inline-flex flex-col items-center gap-2"
      onMouseEnter={() => interactive && setIsHovering(true)}
      onMouseLeave={() => interactive && setIsHovering(false)}
      style={{
        cursor: interactive ? 'pointer' : 'default',
      }}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={dimensions.viewBox}
        fill="none"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <defs>
          <filter id={`glow-${size}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id={`sphereGrad-${size}`}>
            <stop offset="0%" stopColor={v.accent} stopOpacity="0.8"/>
            <stop offset="50%" stopColor={v.primary} stopOpacity="0.6"/>
            <stop offset="100%" stopColor={v.secondary} stopOpacity="0.3"/>
          </radialGradient>
        </defs>

        <g transform="translate(100, 100)">

          {/* 16 photoreceptor rays - arranged in 3D sphere */}
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
              <g key={i} filter={`url(#glow-${size})`}>
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

          {/* Middle ring of rays */}
          {[...Array(12)].map((_, i) => {
            const latAngle = (i * 30 * Math.PI) / 180;
            const radius = 35;

            const baseX = Math.cos(latAngle) * radius;
            const baseY = Math.sin(latAngle) * radius;

            const rotYRad = (rotY + i * 30 + 15) * Math.PI / 180;
            const x1 = baseX * Math.cos(rotYRad);
            const z1 = baseX * Math.sin(rotYRad);
            const y1 = baseY;

            const rotXRad = rotX * Math.PI / 180;
            const y2 = y1 * Math.cos(rotXRad) - z1 * Math.sin(rotXRad);
            const z2 = y1 * Math.sin(rotXRad) + z1 * Math.cos(rotXRad);

            const scale = 800 / (800 + z2);
            const projX = x1 * scale;
            const projY = y2 * scale;

            const depth = (z2 + 35) / 70;
            const opacity = 0.2 + depth * 0.5;

            return (
              <line
                key={`mid-${i}`}
                x1="0"
                y1="0"
                x2={projX}
                y2={projY}
                stroke={v.secondary}
                strokeWidth={1.5}
                strokeLinecap="round"
                opacity={opacity}
                filter={`url(#glow-${size})`}
              />
            );
          })}

          {/* Orbital rings */}
          {[25, 35, 45].map((radius, idx) => {
            const points = 32;
            const pathData = [...Array(points + 1)].map((_, i) => {
              const angle = (i * 360 / points) * Math.PI / 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const z = 0;

              const rotYRad = rotY * Math.PI / 180;
              const x1 = x * Math.cos(rotYRad) - z * Math.sin(rotYRad);
              const z1 = x * Math.sin(rotYRad) + z * Math.cos(rotYRad);

              const rotXRad = rotX * Math.PI / 180;
              const y2 = y * Math.cos(rotXRad) - z1 * Math.sin(rotXRad);
              const z2 = y * Math.sin(rotXRad) + z1 * Math.cos(rotXRad);

              const scale = 800 / (800 + z2);
              const projX = x1 * scale;
              const projY = y2 * scale;

              return `${i === 0 ? 'M' : 'L'} ${projX} ${projY}`;
            }).join(' ');

            return (
              <path
                key={`ring-${idx}`}
                d={pathData + ' Z'}
                fill="none"
                stroke={v.primary}
                strokeWidth={0.5 + idx * 0.3}
                opacity={0.15 + idx * 0.05}
              />
            );
          })}

          {/* Central core */}
          <circle
            r="12"
            fill={`url(#sphereGrad-${size})`}
            filter={`url(#glow-${size})`}
            opacity="0.6"
          />
          <circle
            r="8"
            fill={v.primary}
            filter={`url(#glow-${size})`}
            opacity="0.8"
          />
          <circle
            r="4"
            fill={v.accent}
            opacity="0.95"
          />
          <circle
            r="2"
            fill="#ffffff"
          />

          {/* Front highlight rays */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = Math.cos(angle) * 55;
            const y = Math.sin(angle) * 55;

            const rotYRad = rotY * Math.PI / 180;
            const x1 = x * Math.cos(rotYRad);
            const z1 = x * Math.sin(rotYRad);

            if (z1 > 20) {
              const scale = 800 / (800 + z1);
              const projX = x1 * scale;
              const projY = y * scale;

              return (
                <line
                  key={`front-${i}`}
                  x1="0"
                  y1="0"
                  x2={projX}
                  y2={projY}
                  stroke={v.accent}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.9"
                  filter={`url(#glow-${size})`}
                />
              );
            }
            return null;
          })}

        </g>
      </svg>

      {showText && size !== 'small' && (
        <span
          className="text-xs tracking-wider font-light"
          style={{ color: v.primary }}
        >
          MAANTIS
        </span>
      )}
    </div>
  );
}
