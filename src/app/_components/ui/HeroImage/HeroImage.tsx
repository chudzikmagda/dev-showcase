"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { JSX, useRef } from "react";

import HeroSVG from "./HeroSVG";

export const HeroImage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const time = 0.4;
      const tl = gsap.timeline();

      tl.from("#table", { duration: time, opacity: 0, x: -50 })
        .from("#monitor", { duration: time, opacity: 0, x: 50 }, "<")
        .from("#window3", {
          duration: time * 1.5,
          opacity: 0,
          x: -50,
          ease: "back.out(2)",
        })
        .from(
          "#window1",
          { duration: time * 1.5, opacity: 0, x: 50, ease: "back.out(2)" },
          "<",
        )
        .from("#code--window3", {
          duration: time,
          scaleX: 0,
          transformOrigin: "left center",
          ease: "expo.out",
        })
        .from("#code--window1", {
          duration: time,
          scaleX: 0,
          transformOrigin: "left center",
          ease: "expo.out",
        })
        .from(
          "#code-bottom",
          {
            duration: time,
            scaleX: 0,
            transformOrigin: "left center",
            ease: "expo.out",
          },
          "-=0.2",
        )
        .from("#window4", { duration: time, opacity: 0, y: 50 })
        .from("#window2", { duration: time * 1.5, opacity: 0, y: 80 }, "-=0.2")
        .from("#code--window4", {
          duration: time * 1.2,
          scaleX: 0,
          transformOrigin: "left center",
          ease: "expo.out",
        })
        .from(
          "#code",
          {
            duration: time * 1.2,
            scaleX: 0,
            transformOrigin: "left center",
            ease: "expo.out",
          },
          "-=0.3",
        )
        .from("#image", { duration: time, opacity: 0, y: -50 }, "-=0.2")
        .from(
          "#message",
          {
            duration: time,
            opacity: 0,
            x: 50,
            scale: 0.8,
            transformOrigin: "center center",
          },
          "<",
        )
        .from("#dots", { duration: time, opacity: 0, scale: 0 }, "-=0.3");

      gsap.to(".gear-wrapper", {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 3,
        ease: "none",
        repeat: -1,
      });

      gsap.to("#message", {
        y: "-=10",
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to("#dots > *", {
        y: "+=6",
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.12,
          from: "center",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <HeroSVG />
    </div>
  );
};

export default HeroImage;
