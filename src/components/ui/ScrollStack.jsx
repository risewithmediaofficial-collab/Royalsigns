import React, { useLayoutEffect, useRef, useCallback, useState, useEffect } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

// Hook to detect mobile — disables the stacking animation on small screens
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

// On mobile: card with slide-in animation via IntersectionObserver
export const ScrollStackItem = ({ children, itemClassName = '' }) => {
  const isMobile = useIsMobile();
  const ref = useRef(null);

  useEffect(() => {
    if (!isMobile || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('scroll-stack-mobile-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  if (isMobile) {
    return (
      <div ref={ref} className={`scroll-stack-card-mobile ${itemClassName}`.trim()}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`scroll-stack-card relative w-full my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
      style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const isMobile = useIsMobile();

  // ── MOBILE: plain scrollable list, no animation ──
  if (isMobile) {
    return (
      <div className={`scroll-stack-mobile-list ${className}`.trim()}>
        {children}
      </div>
    );
  }

  // ── DESKTOP: full stacking animation ──
  return (
    <ScrollStackDesktop
      className={className}
      itemDistance={itemDistance}
      itemScale={itemScale}
      itemStackDistance={itemStackDistance}
      stackPosition={stackPosition}
      scaleEndPosition={scaleEndPosition}
      baseScale={baseScale}
      scaleDuration={scaleDuration}
      rotationAmount={rotationAmount}
      blurAmount={blurAmount}
      useWindowScroll={useWindowScroll}
      onStackComplete={onStackComplete}
    >
      {children}
    </ScrollStackDesktop>
  );
};

// Desktop-only stacking animation component
function ScrollStackDesktop({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const cardOffsetsRef = useRef([]);
  const endElementOffsetRef = useRef(0);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
    } else {
      const scroller = scrollerRef.current;
      return { scrollTop: scroller.scrollTop, containerHeight: scroller.clientHeight };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(element => {
    if (!element) return 0;
    if (useWindowScroll) {
      return element.getBoundingClientRect().top + window.scrollY;
    }
    return element.offsetTop;
  }, [useWindowScroll]);

  const recalculateOffsets = useCallback(() => {
    if (!cardsRef.current.length) return;

    const savedTransforms = cardsRef.current.map(c => c ? c.style.transform : '');
    cardsRef.current.forEach(card => { if (card) card.style.transform = 'none'; });

    cardOffsetsRef.current = cardsRef.current.map(card => {
      if (!card) return 0;
      if (useWindowScroll) return card.getBoundingClientRect().top + window.scrollY;
      return card.offsetTop;
    });

    const endEl = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');
    if (endEl) {
      endElementOffsetRef.current = useWindowScroll
        ? endEl.getBoundingClientRect().top + window.scrollY
        : endEl.offsetTop;
    }

    cardsRef.current.forEach((card, i) => {
      if (card) card.style.transform = savedTransforms[i];
    });
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endElementOffsetRef.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardTop = cardOffsetsRef.current[i] ?? getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topIdx = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jTop = cardOffsetsRef.current[j] ?? getElementOffset(cardsRef.current[j]);
          if (scrollTop >= jTop - stackPositionPx - itemStackDistance * j) topIdx = j;
        }
        if (i < topIdx) blur = Math.max(0, (topIdx - i) * blurAmount);
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const nt = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };
      const lt = lastTransformsRef.current.get(i);
      const changed = !lt ||
        Math.abs(lt.translateY - nt.translateY) > 0.1 ||
        Math.abs(lt.scale - nt.scale) > 0.001 ||
        Math.abs(lt.rotation - nt.rotation) > 0.1 ||
        Math.abs(lt.blur - nt.blur) > 0.1;

      if (changed) {
        card.style.transform = `translate3d(0,${nt.translateY}px,0) scale(${nt.scale}) rotate(${nt.rotation}deg)`;
        card.style.filter = nt.blur > 0 ? `blur(${nt.blur}px)` : '';
        lastTransformsRef.current.set(i, nt);
      }
    });

    isUpdatingRef.current = false;
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, rotationAmount, blurAmount, useWindowScroll, calculateProgress, parsePercentage, getScrollData, getElementOffset]);

  const handleScroll = useCallback(() => updateCardTransforms(), [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
    });

    const lenis = new Lenis({
      ...(useWindowScroll ? {} : {
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner')
      }),
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
    });

    lenis.on('scroll', handleScroll);
    if (useWindowScroll) window.addEventListener('scroll', handleScroll, { passive: true });

    const raf = time => { lenis.raf(time); animationFrameRef.current = requestAnimationFrame(raf); };
    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    recalculateOffsets();
    updateCardTransforms();

    window.addEventListener('resize', recalculateOffsets);
    window.addEventListener('load', recalculateOffsets);

    return () => {
      window.removeEventListener('resize', recalculateOffsets);
      window.removeEventListener('load', recalculateOffsets);
      if (useWindowScroll) window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
      cardsRef.current = [];
      transformsCache.clear();
      stackCompletedRef.current = false;
      isUpdatingRef.current = false;
    };
  }, [itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, rotationAmount, blurAmount, useWindowScroll, handleScroll, recalculateOffsets, updateCardTransforms]);

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef}>
      <div className="scroll-stack-inner pt-[10vh] px-4 pb-[8rem] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
}

export default ScrollStack;
