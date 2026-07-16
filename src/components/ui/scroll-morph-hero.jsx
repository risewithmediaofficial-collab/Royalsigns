"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import royalLogo from "../../assets/Royal LOGO.png";
import "./scroll-morph-hero.css";

// Lazy-load all hero animation images — only fetched when component mounts
const heroImageGlob = import.meta.glob(
  "../../assets/home screen animation images/*.{jpg,jpeg,png,webp}"
);
const heroImagePaths = Object.keys(heroImageGlob);

function FlipCard({
    src,
    index,
    target,
    onClick,
    width,
    height,
}) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: width,
                height: height,
                transformStyle: "preserve-3d", 
                perspective: "1000px",
            }}
            onClick={onClick}
            className="flip-card-outer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d", height: "100%", width: "100%" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="flip-card-face face-front"
                    style={{ 
                        backfaceVisibility: "hidden",
                        backgroundColor: '#f3f4f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    {!isLoaded && (
                        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="smh-card-spinner" />
                        </div>
                    )}
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => setIsLoaded(true)}
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                {/* Back Face */}
                <div
                    className="flip-card-face face-back"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <p className="view-label">View</p>
                    <p className="details-label">Preview</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

const TOTAL_IMAGES = heroImagePaths.length;
const MAX_SCROLL = 1000; // Snappy 1000px virtual scroll track

const lerp = (start, end, t) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [activeLightboxImg, setActiveLightboxImg] = useState(null);
    const containerRef = useRef(null);

    // Lazily resolve image URLs — loads images in the background after mount
    const [images, setImages] = useState([]);
    useEffect(() => {
        Promise.all(
            heroImagePaths.map(path => heroImageGlob[path]().then(mod => mod.default || mod))
        ).then(setImages);
    }, []);

    const isMobileView = containerSize.width > 0 && containerSize.width < 768;
    const displayImageCount = isMobileView ? 10 : Math.min(images.length, TOTAL_IMAGES);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0); 

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        if (containerSize.width === 0 || isMobileView) return;

        const handleWheel = (e) => {
            const current = scrollRef.current;
            const delta = e.deltaY;

            // If at the end (MAX_SCROLL) and scrolling down, allow browser scroll
            if (current === MAX_SCROLL && delta > 0) {
                return;
            }

            // If at the start (0) and scrolling up, allow browser scroll if window is scrolled down
            if (current === 0 && delta < 0) {
                if (window.scrollY > 0) {
                    return;
                }
                // Prevent overscroll browser default when already at page top
                e.preventDefault();
                return;
            }

            e.preventDefault();
            const newScroll = Math.min(Math.max(current + delta, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        let touchStartY = 0;
        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            const current = scrollRef.current;

            // If at the end and dragging up (scrolling down), let the page scroll
            if (current === MAX_SCROLL && deltaY > 0) {
                return;
            }

            // If at the start and dragging down (scrolling up), let it scroll if window is scrolled
            if (current === 0 && deltaY < 0) {
                if (window.scrollY > 0) {
                    return;
                }
                if (e.cancelable) e.preventDefault();
                return;
            }

            if (e.cancelable) {
                e.preventDefault();
            }
            touchStartY = touchY;

            const newScroll = Math.min(Math.max(current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll, isMobileView, containerSize.width]);

    useEffect(() => {
        if (isMobileView) {
            scrollRef.current = 0;
            virtualScroll.set(0);
        }
    }, [isMobileView, virtualScroll]);

    // snappy springs for instant, responsive scrolling
    const morphProgress = useTransform(virtualScroll, [0, 400], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 100, damping: 22 });

    const scrollRotate = useTransform(virtualScroll, [400, 1000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 100, damping: 22 });

    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 80, damping: 20 });

    const handleMouseMove = useCallback((e) => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        const normalizedX = (relativeX / rect.width) * 2 - 1;
        mouseX.set(normalizedX * 100);
    }, [mouseX]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || isMobileView) return;
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove, isMobileView]);

    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const scatterPositions = useMemo(() => {
        return heroImagePaths.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);
    const statsOpacity = useTransform(smoothMorph, [0, 0.45], [1, 0]);

    const cornerStats = [
        { label: "Projects Completed", value: "680+", positionClass: "top-left" },
        { label: "Signages Installed", value: "4,299+", positionClass: "top-right" },
        { label: "ACP Elevation Works", value: "75+", positionClass: "bottom-left" },
        { label: "Premium Interiors", value: "34+", positionClass: "bottom-right" }
    ];

    const showStats = introPhase === "circle";

    return (
        <div ref={containerRef} className="smh-wrapper">
            {/* Desktop-only Corner Stats Cards that fade out on scroll morph */}
            {showStats && !isMobileView && (
                <div className="smh-corner-stats-container">
                    {cornerStats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            style={{ opacity: statsOpacity }}
                            initial={{ scale: 0, opacity: 0, y: stat.positionClass.includes("top") ? -40 : 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 180, 
                                damping: 14,
                                delay: idx * 0.12 + 0.2
                            }}
                            className={`smh-corner-card ${stat.positionClass}`}
                        >
                            <span className="smh-corner-value">{stat.value}</span>
                            <span className="smh-corner-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            )}

            <div className="smh-center-container">

                {/* Intro Title Overlay */}
                <div className="smh-intro-text">
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="smh-logo-title"
                    >
                        <img src={royalLogo} alt="Royal Signs Logo" className="smh-logo-img" />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="smh-logo-subtext"
                    >
                        Your Brand, Illuminated. Scroll to Explore
                    </motion.p>
                </div>

                {/* Final Arc Active Content Overlay - Centered using wrapper structure to prevent Framer Motion transform overrides */}
                <div className="smh-active-content-wrapper">
                    <motion.div
                        style={{ opacity: contentOpacity, y: contentY }}
                        className="smh-active-content-inner"
                    >
                        <h2>
                            Crafting Premium Signage <br />
                            <span style={{ color: '#D62828' }}>That Elevates Your Brand</span>
                        </h2>
                        <p>
                            11+ Years of Excellence • 673+ Projects Completed • 4,291+ Signages Installed • Complete Design, Fabrication & Installation Across Chennai & Krishnagiri
                        </p>
                        <div className="smh-btn-row">
                            <button 
                                onClick={() => {
                                    const event = new CustomEvent('toggle-quote-modal', { detail: { open: true } });
                                    window.dispatchEvent(event);
                                }} 
                                className="btn btn-red"
                            >
                                Get Free Quote
                            </button>
                            <button 
                                onClick={() => {
                                    const portfolioSection = document.querySelector('.portfolio-white-section');
                                    if (portfolioSection) {
                                        portfolioSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }} 
                                className="btn btn-secondary"
                            >
                                View Our Work
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Shuffling Cards Circle/Arc */}
                <div className="smh-cards-container">
                    {images.slice(0, displayImageCount).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        const isMobile = containerSize.width < 768;
                        const cardWidth = isMobile ? 38 : 60;
                        const cardHeight = isMobile ? 54 : 85;
                        const itemCount = displayImageCount;

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = isMobile ? 40 : 60;
                            const lineTotalWidth = itemCount * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            // Keep circle radius larger to avoid central text collisions
                            const circleRadius = isMobile 
                                ? Math.min(containerSize.width * 0.40, 145) 
                                : Math.min(minDimension * 0.40, 310);

                            const circleAngle = (i / Math.max(1, itemCount)) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.2);
                            const arcRadius = baseRadius * (isMobile ? 1.2 : 0.95);

                            const arcApexY = containerSize.height * (isMobile ? 0.72 : 0.68);
                            const arcCenterY = arcApexY + arcRadius;

                            const spreadAngle = isMobile ? 90 : 110;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / Math.max(1, itemCount - 1);

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = 25; 
                            const boundedRotation = (scrollProgress - 0.5) * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8, 
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                target={target}
                                width={cardWidth}
                                height={cardHeight}
                                onClick={() => setActiveLightboxImg(src)}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Premium Full-Screen Image Lightbox Modal */}
            {activeLightboxImg && (
                <div 
                    className="smh-lightbox-overlay"
                    onClick={() => setActiveLightboxImg(null)}
                >
                    <div 
                        className="smh-lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={activeLightboxImg} 
                            alt="Visual Signboard Preview" 
                        />
                        <button 
                            className="smh-lightbox-close"
                            onClick={() => setActiveLightboxImg(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
