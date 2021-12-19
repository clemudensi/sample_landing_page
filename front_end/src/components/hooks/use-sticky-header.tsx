import { useCallback, useEffect, useRef, useState } from 'react';

const useStickyHeader = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleSticky = useCallback(
    ({ top }) => {
      if (top <= 0 ) {
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    },
    [isSticky]
  );

  useEffect(() => {
    const handleScroll = () => {
      toggleSticky(headerRef?.current?.getBoundingClientRect());
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleSticky]);

  return { headerRef, isSticky };
};

export { useStickyHeader };
