"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  ...props
}) => {
  const ref = useRef(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget = container || document.getElementById('snap-main-container') || null;

    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    // Apply initial hidden state via GSAP (not via CSS attribute)
    // This ensures the element is visible during SSR and only hidden
    // once GSAP is ready to animate it back.
    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible'
    });

    const tl = gsap.timeline({
      paused: true,
      delay,
      onComplete: () => {
        hasPlayedRef.current = true;
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            [axis]: reverse ? distance : -distance,
            scale: 0.8,
            opacity: animateOpacity ? initialOpacity : 0,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease
    });

    const playOnce = () => {
      if (hasPlayedRef.current) return;
      hasPlayedRef.current = true;
      tl.play();
    };

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget,
      start: `top ${startPct}%`,
      once: true,
      onEnter: playOnce
    });

    // Tier 1: Check immediately on next frame if already in viewport.
    // Dev server and Vercel often mount components that are already visible.
    const revealIfAlreadyVisible = () => {
      if (hasPlayedRef.current) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        playOnce();
      }
      ScrollTrigger.refresh();
    };

    const frame = window.requestAnimationFrame(revealIfAlreadyVisible);

    // Tier 2: Re-check after fonts finish loading (can shift layout).
    let fontCheck;
    if (document.fonts?.ready) {
      fontCheck = document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
        revealIfAlreadyVisible();
      }).catch(() => {});
    }

    // Tier 3: Safety net — if animation still hasn't played after 2s,
    // force-reveal. This catches HMR, slow hydration, and timing edge cases.
    const safetyTimer = setTimeout(() => {
      if (!hasPlayedRef.current) {
        playOnce();
      }
    }, 2000);

    return () => {
      window.cancelAnimationFrame(frame);
      clearTimeout(safetyTimer);
      st.kill();
      tl.kill();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete
  ]);

  // Render with opacity:0 instead of visibility:hidden.
  // This ensures the element occupies layout space during SSR (preventing
  // content from collapsing), while still being invisible until GSAP
  // animates it in. GSAP's set() above immediately switches to
  // visibility:visible + the desired offset/opacity.
  return (
    <div ref={ref} className={className} style={{ opacity: 0 }} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
