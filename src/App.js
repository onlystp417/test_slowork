import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { pdfjs } from 'react-pdf';

// componsnts
import HeaderMobile from '@/components/HeaderMobile';
import HeaderTablet from '@/components/HeaderTablet';
import Marquee from '@/components/Marquee';
import Banner from '@/components/Banner';
import Reader from '@/components/Reader';
import FolksMobile from '@/components/FolksMobile';
import FolksTablet from '@/components/FolksTablet';
import Campaigns from '@/components/Campaigns';
import Podcast from '@/components/Podcast';
import Footer from '@/components/Footer';

import './App.sass';

function App() {
  useEffect(() => {
    initLang();
    initVisit();
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);
  const { i18n } = useTranslation();
  const scrollDirection = useScrollDirection();
  const headerRef = useRef(null);
  const readRef = useRef(null);
  const podcastRef = useRef(null);
  const campaignRef = useRef(null);
  const refs = {
    header: headerRef,
    read: readRef,
    podcast: podcastRef,
    campaigns: campaignRef
  };

  return (
    <div className="home">
      <div ref={headerRef} className={`sticky ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
        <div className="mobile">
          <HeaderMobile onScrollTo={name => scrollTo(name)} />
        </div>
        <div className="tablet">
          <HeaderTablet onScrollTo={name => scrollTo(name)} />
        </div>
      </div>
      <div>
        <Marquee />
      </div>
      <Banner />
      <div className="mobile">
        <FolksMobile />
      </div>
      <div className="tablet">
        <FolksTablet />
      </div>
      <div ref={readRef}>
        <Reader />
      </div>
      <div ref={podcastRef}>{i18n.language === 'zhTW' ? <Podcast /> : ''}</div>
      <div ref={campaignRef}>{i18n.language === 'zhTW' ? <Campaigns /> : ''}</div>
      <Footer />
    </div>
  );

  function initLang() {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'zhTW');
    }
  }

  function initVisit() {
    if (!localStorage.getItem('isVisited')) {
      localStorage.setItem('isVisited', true);
    }
  }

  function scrollTo(refName) {
    if (refName === 'about') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const offsetTop = refs[refName].current.offsetTop;
      const scrollTop = offsetTop;
      // const headerHeight = headerRef.current.clientHeight;
      // const scrollTop = offsetTop - headerHeight;
      // console.log(offsetTop, headerHeight);
      window.scroll({
        top: scrollTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      console.log('direction', direction);
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default App;
