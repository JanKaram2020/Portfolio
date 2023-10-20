import { useEffect, useState } from 'react';

export const useTwDarkMode = () => {
  function checkDarkMode() {
    if (typeof window === 'undefined') return false;
    return document.body.classList.contains('dark');
  }
  const [isDark, setIsDark] = useState(checkDarkMode());

  useEffect(() => {
    setIsDark(checkDarkMode);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(checkDarkMode());
        }
      });
    });

    mutationObserver.observe(document.body, { attributes: true });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);
  const toggleMode = () => {
    localStorage.theme = !isDark;
    document.body.classList.toggle('dark');
  };
  return { isDark, toggleMode };
};
