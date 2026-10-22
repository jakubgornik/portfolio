"use client";

import { useEffect, useRef, useState, type FocusEvent } from "react";
import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLenis } from "lenis/react";

const horizontalMediaQuery =
  "(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";

export const useProjectScroll = (projectCount: number) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const scrollDistance = useMotionValue(0);
  const lenis = useLenis();
  const { scrollYProgress: progress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(() => -progress.get() * scrollDistance.get());
  const height = useTransform(scrollDistance, (distance) =>
    distance > 0 ? `calc(100svh + ${distance}px)` : "auto",
  );

  useMotionValueEvent(progress, "change", (value) => {
    if (scrollDistance.get() === 0) return;

    const index = Math.round(
      Math.min(1, Math.max(0, value)) * Math.max(0, projectCount - 1),
    );
    if (index !== activeProject) setActiveProject(index);
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const mediaQuery = window.matchMedia(horizontalMediaQuery);
    const measureTrack = () => {
      const cards = track.querySelectorAll<HTMLElement>("[data-project-index]");
      const firstCard = cards[0];
      const lastCard = cards[cards.length - 1];

      scrollDistance.set(
        mediaQuery.matches && firstCard && lastCard
          ? Math.max(0, lastCard.offsetLeft - firstCard.offsetLeft)
          : 0,
      );
    };
    const observer = new ResizeObserver(measureTrack);

    observer.observe(track);
    mediaQuery.addEventListener("change", measureTrack);
    measureTrack();

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", measureTrack);
    };
  }, [projectCount, scrollDistance]);

  const scrollToProject = (index: number) => {
    const section = sectionRef.current;
    const distance = scrollDistance.get();
    if (!section || distance === 0) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const target =
      sectionTop + (index / Math.max(1, projectCount - 1)) * distance;

    if (lenis) {
      lenis.scrollTo(target, { duration: 1.2 });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  const handleProjectFocus = (event: FocusEvent<HTMLUListElement>) => {
    const card = event.target.closest<HTMLElement>("[data-project-index]");
    if (card) scrollToProject(Number(card.dataset.projectIndex));
  };

  return {
    sectionRef,
    trackRef,
    height,
    x,
    progress,
    activeProject,
    scrollToProject,
    handleProjectFocus,
  };
};
