import React, { useState, useEffect } from 'react';

export default function MaantisLogo3D() {
  const [variant, setVariant] = useState('neural');
  const [isHovering, setIsHovering] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  
  useEffect(() => {
    if (!isHovering) {
      setRotationAngle(0);
      return;
    }
    
    let start = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - start) / 1000;
      setRotationAngle(elapsed * 60); // 60 degrees per second
      if (isHovering) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isHovering]);
  
  const variants = {
    neural: {
      bg: 'from-black via-slate-950 to-black',
      primary: '#00d9ff',
      secondary: '#0496ff',
      accent: '#00ffff',
      name: 'NEURAL'
    },
    quantum: {
      bg: 'from-black via-emerald-950 to-black',
      primary: '#10b981',
      secondary: '#06ffa5',
      accent: '#00ff88',
      name: 'QUANTUM'
    },
    agentic: {
      bg: 'from-black via-purple-950 to-black',
      primary: '#a855f7',
      secondary: '#8b5cf6',
      accent: '#c084fc',
      name: 'AGENTIC'
    },
    mono: {
      bg: 'from-slate-950 to-slate-900',
      primary: '#ffffff',
      secondary: '#e5e5e5',
      accent: '#cccccc',
      name: 'MONO'
    }
  };
  
  const v = variants[variant];
  
  // Calculate 3D rotation values
  const rotY = rotationAngle;
  const rotX = Math.sin(rotationAngle * Math.PI / 180) * 15; // Slight X wobble
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br ${v.bg} p-8`}>
      
      <div className="flex flex-col items-center gap-20">
        
        <div 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="cursor-pointer"
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <svg width="300" height="300" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <radialGradient id="sphereGrad">
                <stop offset="0%" stopColor={v.accent} stopOpacity="0.8"/>
                <stop offset="50%" stopColor={v.primary} stopOpacity="0.6"/>
                <stop offset="100%" stopColor={v.secondary} stopOpacity="0.3"/>
              </radialGradient>
            </defs>
            
            <g transform="translate(100, 100)">
              
              {/* 16 photoreceptor rays - arranged in 3D sphere */}
              {[...Array(16)].map((_, i) => {
                const latAngle = (i * 22.5 * Math.PI) / 180;
                
                // Calculate 3D position
                const baseX = Math.cos(latAngle) * 50;
                const baseY = Math.sin(latAngle) * 50;
                const baseZ = 0;
                
                // Apply Y rotation (horizontal spin)
                const rotYRad = (rotY + i * 22.5) * Math.PI / 180;
                const x1 = baseX * Math.cos(rotYRad) - baseZ * Math.sin(rotYRad);
                const z1 = baseX * Math.sin(rotYRad) + baseZ * Math.cos(rotYRad);
                const y1 = baseY;
                
                // Apply X rotation (vertical tilt)
                const rotXRad = rotX * Math.PI / 180;
                const y2 = y1 * Math.cos(rotXRad) - z1 * Math.sin(rotXRad);
                const z2 = y1 * Math.sin(rotXRad) + z1 * Math.cos(rotXRad);
                const x2 = x1;
                
                // Perspective projection
                const scale = 800 / (800 + z2);
                const projX = x2 * scale;
                const projY = y2 * scale;
                
                // Depth-based opacity and color
                const depth = (z2 + 50) / 100; // 0 to 1
                const opacity = 0.3 + depth * 0.7;
                const strokeWidth = 2 + depth * 2;
                
                // Inner point (closer to center)
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
                  <g key={i} filter="url(#glow)">
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
              
              {/* Middle ring of rays - creates more depth */}
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
                    filter="url(#glow)"
                  />
                );
              })}
              
              {/* Orbital rings - enhance 3D effect */}
              {[25, 35, 45].map((radius, idx) => {
                const points = 32;
                const pathData = [...Array(points + 1)].map((_, i) => {
                  const angle = (i * 360 / points) * Math.PI / 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const z = 0;
                  
                  // Rotate
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
              
              {/* Central core - glowing sphere */}
              <circle 
                r="12" 
                fill="url(#sphereGrad)" 
                filter="url(#glow)"
                opacity="0.6"
              />
              <circle 
                r="8" 
                fill={v.primary} 
                filter="url(#glow)"
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
              
              {/* Front highlight rays - always on top */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const x = Math.cos(angle) * 55;
                const y = Math.sin(angle) * 55;
                
                // These stay in front
                const rotYRad = rotY * Math.PI / 180;
                const x1 = x * Math.cos(rotYRad);
                const z1 = x * Math.sin(rotYRad);
                
                if (z1 > 20) { // Only render front-facing
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
                      filter="url(#glow)"
                    />
                  );
                }
                return null;
              })}
              
            </g>
          </svg>
        </div>
        
        {/* Typography */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-7xl font-extralight tracking-[0.5em]" 
              style={{ 
                color: v.primary,
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                textShadow: `0 0 60px ${v.primary}20`
              }}>
            MAANTIS
          </h1>
          <div className="text-[11px] tracking-[0.4em] font-light" 
               style={{ color: v.primary, opacity: 0.5 }}>
            MODULAR • ADAPTIVE • ARCHITECTURE
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="mt-20 flex gap-6">
        {Object.entries(variants).map(([key, val]) => (
          <button 
            key={key}
            onClick={() => setVariant(key)} 
            className="px-5 py-2 text-[10px] tracking-widest font-light transition-all"
            style={{ 
              color: variant === key ? val.primary : '#666',
              opacity: variant === key ? 1 : 0.5
            }}>
            {val.name}
          </button>
        ))}
      </div>
      
      <div className="mt-8 text-gray-600 text-xs">HOVER TO ROTATE</div>
    </div>
  );
}