import React, { useState, useEffect, useRef } from 'react';
import './AnimatedCounter.css';

const CounterItem = ({ target, suffix = '', label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let start = 0;
          const end = parseInt(target, 10);
          if (start === end) return;

          const totalMiliseconds = duration;
          const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
          
          const timer = setInterval(() => {
            start += Math.ceil(end / (totalMiliseconds / incrementTime));
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, incrementTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target, duration]);

  return (
    <div className="counter-item" ref={elementRef}>
      <h3 className="counter-value">
        <span className="glow-yellow">{count}</span>
        {suffix}
      </h3>
      <p className="counter-label">{label}</p>
    </div>
  );
};

export default function AnimatedCounter() {
  return (
    <div className="counter-container section-padding">
      <div className="container counter-grid">
        <CounterItem target="11" suffix="+" label="Years in Business (Since 2015)" />
        <CounterItem target="1200" suffix="+" label="Premium Signboards Delivered" />
        <CounterItem target="168" suffix="+" label="Happy Client Reviews" />
        <CounterItem target="98" suffix="%" label="Fast & On-Time Delivery" />
      </div>
    </div>
  );
}
