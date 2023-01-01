import React, { useEffect, useRef } from 'react';
// componsnts
import HeaderMobile from '@/components/HeaderMobile';
import HeaderTablet from '@/components/HeaderTablet';
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
  }, []);

  const headerRef = useRef(null)
  const readRef = useRef(null);
  const podcastRef = useRef(null);
  const campaignRef = useRef(null);
  const refs = {
    header: headerRef,
    read: readRef,
    podcast: podcastRef,
    campaigns: campaignRef,
  }

  return (
    <div className="home">
      <div ref={headerRef} className="sticky">
        <div className="mobile">
          <HeaderMobile onScrollTo={name => scrollTo(name)} />
        </div>
        <div className="tablet">
          <HeaderTablet onScrollTo={name => scrollTo(name)} />
        </div>
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
      <div ref={podcastRef}>
        {localStorage.getItem('lang') === 'zhTW' ? <Podcast /> : ''}
      </div>
      <div ref={campaignRef}>
        {localStorage.getItem('lang') === 'zhTW' ? <Campaigns /> : ''}
      </div>
      <Footer />
    </div>
  );

  function initLang() {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'zhTW');
  }

  function scrollTo(refName) {
    if (refName === 'about') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const offsetTop = refs[refName].current.offsetTop
      const headerHeight = headerRef.current.clientHeight
      const scrollTop = offsetTop - headerHeight
      console.log(offsetTop, headerHeight)
      window.scroll({
        top: scrollTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

export default App;
