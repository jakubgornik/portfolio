"use client";

import NextJsIcon from "@/app/components/svg/technologies/NextjsIcon";
import ReactJsIcon from "@/app/components/svg/technologies/ReactjsIcon";
import JavascriptIcon from "@/app/components/svg/technologies/JavascriptIcon";
import TypescriptIcon from "@/app/components/svg/technologies/TypescriptIcon";
import TailwindIcon from "@/app/components/svg/technologies/TailwindIcon";
import CssIcon from "@/app/components/svg/technologies/CssIcon";
import MaterialUiIcon from "@/app/components/svg/technologies/MaterialuiIcon";
import GitIcon from "@/app/components/svg/technologies/GitIcon";
import FirebaseIcon from "@/app/components/svg/technologies/FirebaseIcon";
import FigmaIcon from "@/app/components/svg/technologies/FigmaIcon";
import HtmlIcon from "@/app/components/svg/technologies/HtmlIcon";
import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Container } from "@/app/components/container";

const CENTER_PLAYBACK_RATE = 1;
const EDGE_PLAYBACK_RATE = 5;
const sliderIcons = [
  NextJsIcon,
  ReactJsIcon,
  JavascriptIcon,
  TypescriptIcon,
  TailwindIcon,
  MaterialUiIcon,
  CssIcon,
  HtmlIcon,
  GitIcon,
  FirebaseIcon,
  FigmaIcon,
];

export const Slider = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollerRef,
    offset: ["start end", "end start"],
  });
  const playbackRate = useTransform(scrollYProgress, (progress) => {
    const distance = Math.abs(progress * 2 - 1);
    const easedDistance = distance * distance * (3 - 2 * distance);
    return (
      CENTER_PLAYBACK_RATE +
      (EDGE_PLAYBACK_RATE - CENTER_PLAYBACK_RATE) * easedDistance
    );
  });

  useEffect(() => {
    const animation = trackRef.current?.getAnimations()[0];
    if (!animation) return;

    animation.updatePlaybackRate(playbackRate.get());
    return playbackRate.on("change", (rate) => {
      animation.updatePlaybackRate(rate);
    });
  }, [playbackRate]);

  return (
    <div className="mt-16">
      <Container>
        <div
          ref={scrollerRef}
          data-animated="true"
          className="scroller mx-auto max-w-full"
        >
          <div ref={trackRef} className="scroller-inner flex py-8">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24"
              >
                {sliderIcons.map((Icon, index) => (
                  <Icon key={index} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
