import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
} 

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

// Utility function to get window width safely
export function getWindowWidth(): number | undefined {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return undefined;
}

// Utility function to check if screen size matches a breakpoint
export function useScreenSize(breakpoint: number): boolean {
  const { width } = useWindowSize();
  
  if (width === undefined) {
    return false; // Default to false on server-side
  }
  
  return width <= breakpoint;
}

// Alternative hook that forces re-render on resize
export function useResponsiveBreakpoint(breakpoint: number): boolean {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkBreakpoint = () => {
        setIsBelowBreakpoint(window.innerWidth <= breakpoint);
      };

      // Check immediately
      checkBreakpoint();

      // Add resize listener
      window.addEventListener('resize', checkBreakpoint);

      // Cleanup
      return () => window.removeEventListener('resize', checkBreakpoint);
    }
  }, [breakpoint]);

  return isBelowBreakpoint;
} 