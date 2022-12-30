import React from 'react';
// componsnts
import Reader from '@/components/Reader';
import Header from '@/components/Header';
import Banner from '@/components/Banner';

function App() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Reader />
    </div>
  );
}

export default App;
