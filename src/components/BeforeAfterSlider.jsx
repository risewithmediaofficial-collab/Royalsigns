import React, { useState, useRef, useEffect, useCallback } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div className="slider-wrapper">
      <div className="slider-labels">
        <span className="slider-label-item before-label">DAY / UNLIT</span>
        <span className="slider-label-item after-label">NIGHT / ILLUMINATED</span>
      </div>

      <div 
        ref={containerRef} 
        className="slider-container"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Before Layer (Daytime / Off) */}
        <div className="slider-layer layer-before">
          <div className="mock-board board-day">
            <div className="board-frame">
              <div className="board-logo">
                <span className="board-icon-day">✦</span>
                <span className="board-text">ROYAL SIGNS</span>
              </div>
              <p className="board-sub">LED & ACP SIGN BOARDS</p>
              <div className="board-screws">
                <span className="screw s-tl"></span>
                <span className="screw s-tr"></span>
                <span className="screw s-bl"></span>
                <span className="screw s-br"></span>
              </div>
            </div>
            <div className="scaffolding">
              <div className="pole pole-left"></div>
              <div className="pole pole-right"></div>
            </div>
          </div>
        </div>

        {/* After Layer (Nighttime / Illuminated - Clipped based on sliderPosition) */}
        <div 
          className="slider-layer layer-after" 
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <div className="mock-board board-night">
            <div className="board-frame glow-border">
              <div className="board-logo">
                <span className="board-icon-night animate-flicker">✦</span>
                <span className="board-text text-glow">ROYAL SIGNS</span>
              </div>
              <p className="board-sub sub-glow">LED & ACP SIGN BOARDS</p>
              <div className="board-screws">
                <span className="screw s-tl glow-dot"></span>
                <span className="screw s-tr glow-dot"></span>
                <span className="screw s-bl glow-dot"></span>
                <span className="screw s-br glow-dot"></span>
              </div>
            </div>
            <div className="scaffolding dark-scaffolding">
              <div className="pole pole-left"></div>
              <div className="pole pole-right"></div>
            </div>
            <div className="night-light-beams"></div>
          </div>
        </div>

        {/* Slider Handle Divider */}
        <div 
          className="slider-handle" 
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="handle-line"></div>
          <div className="handle-button">
            <span>&#9664;</span>
            <span>&#9654;</span>
          </div>
        </div>
      </div>
      <p className="slider-instruction text-center">Drag the slider left and right to see our illumination effect</p>
    </div>
  );
}
