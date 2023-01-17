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
          <div className="paragraph">
            <p className="title">■ {mainText[0].title}</p>
            {mainText[0].content.map((content, index) => (
              <span key={index} className={`content ${content.highlight ? 'highlight' : ''}`}>
                {content.text}
              </span>
            ))}
          </div>
          <div className="paragraph">
            <p className="title">■ {mainText[1].title}</p>
            {mainText[1].content.map((content, index) => (
              <span key={index} className={`content ${content.highlight ? 'highlight' : ''}`}>
                {content.text}
              </span>
            ))}
          </div>
          <p className="paragraph">{mainText[1].ps}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
