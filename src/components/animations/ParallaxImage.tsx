'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // E.g., 0.2 for 20% parallax movement
}

export default function ParallaxImage({ children, className, speed = 0.2 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Zoom in on load for hero images
    gsap.fromTo(
      imageRef.current,
      { scale: 1.15 },
      { scale: 1, duration: 2, ease: 'power3.out' }
    );

    // Parallax on scroll
    gsap.to(imageRef.current, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className} style={{ overflow: 'hidden' }}>
      <div ref={imageRef} style={{ width: '100%', height: '130%', position: 'absolute', top: '-15%', left: 0 }}>
        {children}
      </div>
    </div>
  );
}
