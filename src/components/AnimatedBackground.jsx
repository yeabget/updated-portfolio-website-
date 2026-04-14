import React from "react";
import "./animatedBg.css";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg">
      {[...Array(80)].map((_, i) => (
        <span
          key={i}
          className="spark"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        ></span>
      ))}
    </div>
  );
}