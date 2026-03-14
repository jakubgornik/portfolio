"use client";

import { ReactLenis } from "lenis/react";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};
