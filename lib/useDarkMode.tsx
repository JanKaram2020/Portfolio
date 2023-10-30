import { useEffect, useSyncExternalStore } from 'react';
import { useColorMode } from '@chakra-ui/react';

function subscribe(callback: () => void) {
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        callback();
      }
    });
  });

  mutationObserver.observe(document.body, { attributes: true });
  return () => {
    mutationObserver.disconnect();
  };
}
function getSnapshot() {
  return document.body.classList.contains('dark');
}
export const toggleMode = (v?: 'light' | 'dark') => {
  if (v === 'light') {
    localStorage.isDarkTheme = false;
    document.body.classList.remove('dark');
    return;
  }
  if (v === 'dark') {
    localStorage.isDarkTheme = true;
    document.body.classList.add('dark');
    return;
  }
  localStorage.isDarkTheme = !document.body.classList.contains('dark');
  document.body.classList.toggle('dark');
};
export const useDarkMode = () => {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const { toggleColorMode, colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const mode = localStorage['chakra-ui-color-mode'];
    if (typeof mode === 'string' && (mode === 'light' || mode === 'dark')) {
      toggleMode(mode);
      setColorMode(mode);
    }
  }, [setColorMode]);

  useEffect(() => {
    if ((colorMode === 'dark') !== isDark) {
      toggleColorMode();
    }
  }, [colorMode, isDark, toggleColorMode]);

  return isDark;
};
