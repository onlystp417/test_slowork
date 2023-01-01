import React, { useEffect } from 'react';
// componsnts
import HeaderMobile from '@/components/HeaderMobile';
import HeaderDesktop from '@/components/HeaderDesktop';
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

  return (
    <div className="home">
      <div className="mobile sticky">
        <HeaderMobile />
      </div>
      <div className="tablet sticky">
        <HeaderDesktop />
      </div>
      <Banner />
      <div className="mobile">
        <FolksMobile />
      </div>
      <div className="tablet">
        <FolksTablet />
      </div>
      <Reader />
      {localStorage.getItem('lang') === 'zhTW' ? <Podcast /> : ''}
      {localStorage.getItem('lang') === 'zhTW' ? <Campaigns /> : ''}
      <Footer />
    </div>
  );

  function initLang() {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'zhTW');
  }
}

export default App;
