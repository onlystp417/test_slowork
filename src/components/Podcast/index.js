import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Play } from '@/assets/images/play.svg';
import Cahnnel from '@/assets/images/podcast-cover.png';

import './index.sass';

function Podcast() {
  const { t } = useTranslation();
  const list = t('podcast.list', { returnObjects: true });

  return (
    <div className="podcast">
      <h2 className="podcast__title">{t('podcast.title')}</h2>
      <div className="podcast__list">
        {list.map((item, index) => (
          <div className="podcast__item" key={index}>
            <div className="img">
              <img src={Cahnnel} alt="鳴個喇叭，緬甸街" />
            </div>
            <div className="info">
              <a href={item.link} className="play" target="_blank" rel="noreferrer">
                <Play />
              </a>
              <div className="text">
                <p>{item.title}</p>
                <span>{item.info}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Podcast;
