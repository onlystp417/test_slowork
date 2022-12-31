import React from 'react';
import { useTranslation } from 'react-i18next';
import BookTitle from '@/assets/images/book-title.png';
import BookTitleEn from '@/assets/images/book-title-en.png';
import SloworkLogo from '@/assets/images/slowork-logo-black.png';

import './index.sass';
function Banner() {
  const { t } = useTranslation();
  const mainText = t('main', { returnObjects: true });
  return (
    <div className="banner">
      <h1 className="banner__title">
        <img src={BookTitle} alt="緬甸 最後一搏 Myanmar, the last stand" />
      </h1>
      <div className="banner__info">
        <div className="banner__logo">
          <img src={BookTitleEn} alt="緬甸 最後一搏 Myanmar, the last stand" />
          <img src={SloworkLogo} alt="Slowork 慢工出版" />
        </div>
        <div className="banner__main">
          {mainText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
