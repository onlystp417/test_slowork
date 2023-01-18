import React, { useState } from 'react';
import { ReactComponent as DropArrow } from '@/assets/images/caret-right.svg';

import { useTranslation } from 'react-i18next';

import Script from '@/assets/images/script.png';
import Comic from '@/assets/images/comic.png';
import Slowork from '@/assets/images/slowork-logo-square.png';

import './index.sass';

function Folks() {
  const { t } = useTranslation();
  const [tab, setTab] = useState(null);
  const scriptDes = t('folks.script.des', { returnObjects: true });
  const comicDes = t('folks.comic.des', { returnObjects: true });
  const publishingDes = t('folks.publishing.des', { returnObjects: true });

  return (
    <div className="folks">
      <div className="folk">
        <div className={`folk__header expand__header ${tab === 'script' ? 'active' : ''}`} onClick={() => onSetTab('script')}>
          <DropArrow className="drop" />
          <div className="title">{t('folks.script.name')}</div>
        </div>
        <div className="folk__content expand__content">
          <img src={Script} alt={t('folks.script.name')} />
          {scriptDes.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
      <div className="folk expand">
        <div className={`folk__header expand__header ${tab === 'comic' ? 'active' : ''}`} onClick={() => onSetTab('comic')}>
          <DropArrow className="drop" />
          <div className="title">{t('folks.comic.name')}</div>
        </div>
        <div className="folk__content expand__content">
          <img src={Comic} alt={t('folks.comic.name')} />
          {comicDes.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
      <div className="folk">
        <div className={`folk__header expand__header ${tab === 'publishing' ? 'active' : ''}`} onClick={() => onSetTab('publishing')}>
          <DropArrow className="drop" />
          <div className="title">{t('folks.publishing.name')}</div>
        </div>
        <div className="folk__content expand__content">
          <img src={Slowork} alt={t('folks.publishing.name')} />
          {publishingDes.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );

  function onSetTab(currTab) {
    if(currTab === tab) setTab(null);
    else setTab(currTab);
  }
}

export default Folks;
