import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '../styles/globals.css';
import CustomCursor from '../components/CustomCursor';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && <CustomCursor />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;