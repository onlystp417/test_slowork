import React from 'react';
// componsnts
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Reader from '@/components/Reader';
import FolksMobile from '@/components/FolksMobile';
import FolksTablet from '@/components/FolksTablet';

import './App.sass';

function App() {
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
      {/* <FolksTablet /> */}
      <Reader />
    </div>
  );
}

export default App;
