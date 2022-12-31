import React from 'react';
import { ReactComponent as DropArrow } from '@/assets/images/caret-right.svg';

import { useTranslation } from 'react-i18next';

import Script from '@/assets/images/script.png';
import Comic from '@/assets/images/comic.png';
import Slowork from '@/assets/images/slowork-logo-square.png';

import './index.sass';

function Folks() {
  const { t } = useTranslation();
  const scriptDes = t('folks.script.des', { returnObjects: true });
  const comicDes = t('folks.comic.des', { returnObjects: true });
  const publishingDes = t('folks.publishing.des', { returnObjects: true });

  return (
    <div className="folks">
      <div className="folk">
        <label className="folk__header expand__header" htmlFor="script">
          <input type="checkbox" id="script" />
          <DropArrow className="drop" />
          <div className="title">{t('folks.script.name')}</div>
        </label>
        <div className="folk__content expand__content">
          <img src={Script} alt={t('folks.script.name')} />
          {scriptDes.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
      <div className="folk expand">
        <label className="folk__header expand__header" htmlFor="comic">
          <input type="checkbox" id="comic" />
          <DropArrow className="drop" />
          <div className="title">{t('folks.comic.name')}</div>
        </label>
        <div className="folk__content expand__content">
          <img src={Comic} alt={t('folks.comic.name')} />
          {comicDes.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
      <div className="folk">
        <label className="folk__header expand__header" htmlFor="publishing">
          <input type="checkbox" id="publishing" />
          <DropArrow className="drop" />
          <div className="title">{t('folks.publishing.name')}</div>
        </label>
        <div className="folk__content expand__content">
          <img src={Slowork} alt={t('folks.publishing.name')} />
          {publishingDes.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Folks;
