import { useState, useEffect, useCallback } from 'react';

const MOBILE_BREAKPOINT = 992;

interface MobileLayoutState {
  isMobile: boolean;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function useMobileLayout(): MobileLayoutState {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = useCallback(() => setIsSidebarOpen((prev) => !prev), []);

  return { isMobile, isSidebarOpen, toggleSidebar };
}
