import { useState, useEffect } from "react";

export function EffectPlayground() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(function calculateWindowWidth() {
    // PART 1: The Action (What the effect does)

    const handleResize = () => {
      console.log("Window resized");
      setWindowWidth(window.innerWidth);
    };

    // We reach outside React to touch the Browser's DOM API
    window.addEventListener("resize", handleResize);

    // PART 2: THE CLEANUP FUNCTION
    // if this component is removed from the screen, we MUST remove the listener. Otherwise, we create a massive memory leak.

    return () => {
      console.log("Cleaning up the listerner");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // PART 3: THE DEPENDENCY ARRAY (The Trigger)

  return <div className="text-xl font-bold">Window Width: {windowWidth}px</div>;
}
