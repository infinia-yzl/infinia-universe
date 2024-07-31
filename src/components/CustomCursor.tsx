'use client';

import {
  useEffect, useRef, useState,
} from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let rafId: number;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        if (!isVisible) {
          setIsVisible(true);
        }
      });
    };

    const hideCursor = () => {
      if (cursor) cursor.style.opacity = '0';
      document.body.style.cursor = 'auto';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    // Initial position off-screen
    cursor.style.left = '-100px';
    cursor.style.top = '-100px';

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = 'auto';
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      document.body.style.cursor = 'none';
    }
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
}
