import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// componsnts
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Reader from '@/components/Reader';
import FolksMobile from '@/components/FolksMobile';
import FolksTablet from '@/components/FolksTablet';
import Campaigns from '@/components/Campaigns';
import Footer from '@/components/Footer';

import './App.sass';

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="home">
      <Header />
      <Banner />
      <div className="mobile">
        <FolksMobile />
      </div>
      <div className="tablet">
        <FolksTablet />
      </div>
      <Reader />
      {/* {localStorage.getItem('lang') === 'zhTW' ? <Podcast /> : ''} */}
      {localStorage.getItem('lang') === 'zhTW' ? <Campaigns /> : ''}
      <Footer />
    </div>
  );
}

export default App;
