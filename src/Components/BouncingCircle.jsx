import React, { useRef, useEffect, useState } from "react";

const BouncingCircle = ({
  size = 128,
  color = "bg-red-200",
  opacity = "opacity-60",
  parentSelector = "",
  initial = { x: 0, y: 0 },
  speed = 2,
}) => {
  const [pos, setPos] = useState(initial);
  const [dir, setDir] = useState({ dx: speed, dy: speed });
  const [bounds, setBounds] = useState({ width: 0, height: 0 });
  const circleRef = useRef();
  const requestRef = useRef();

  useEffect(() => {
    const updateBounds = () => {
      let parent = parentSelector
        ? document.querySelector(parentSelector)
        : circleRef.current?.parentElement;
      if (parent) {
        setBounds({
          width: parent.clientWidth,
          height: parent.clientHeight,
        });
      }
    };
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPos((prev) => {
        let { x, y } = prev;
        let { dx, dy } = dir;
        let { width, height } = bounds;

        x += dx;
        y += dy;

        
        let newDx = dx;
        let newDy = dy;
        if (x <= 0 || x + size >= width) newDx = -dx;
        if (y <= 0 || y + size >= height) newDy = -dy;

        // Only update dir if changed
        if (newDx !== dx || newDy !== dy) setDir({ dx: newDx, dy: newDy });

        return {
          x: Math.max(0, Math.min(width - size, x)),
          y: Math.max(0, Math.min(height - size, y)),
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    if (bounds.width && bounds.height) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [dir, size, bounds.width, bounds.height]);

  return (
    <div
      ref={circleRef}
      className={`${color} ${opacity} rounded-full`}
      style={{
        width: size,
        height: size,
        position: "absolute",
        left: pos.x,
        top: pos.y,
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default BouncingCircle;