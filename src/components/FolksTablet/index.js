import React, { useState } from 'react';
import { ReactComponent as DropArrow } from '@/assets/images/caret-right.svg';

import { useTranslation } from 'react-i18next';

import Script from '@/assets/images/script.png';
import Comic from '@/assets/images/comic.png';
import Slowork from '@/assets/images/slowork-logo-square.png';

import './index.sass';

function Folks() {
  const { t } = useTranslation();
  const [tab, setTab] = useState('');
  const scriptDes = t('folks.script.des', { returnObjects: true });
  const comicDes = t('folks.comic.des', { returnObjects: true });
  const publishingDes = t('folks.publishing.des', { returnObjects: true });

  return (
    <div className="folks">
      <div className="folk">
        <div className={`folk__header expand__header ${tab === 'script' ? 'active' : ''}`} onClick={() => setExpand('script')}>
          <DropArrow className="drop" />
          <div className="title">{t('folks.script.name')}</div>
        </div>
        <div className={`folk__header expand__header ${tab === 'comic' ? 'active' : ''}`} onClick={() => setExpand('comic')}>
          <DropArrow className="drop" />
          <div className="title">{t('folks.comic.name')}</div>
        </div>
        <div className={`folk__header expand__header ${tab === 'publishing' ? 'active' : ''}`} onClick={() => setExpand('publishing')}>
          <DropArrow className="drop" />
          <div className="title">{t('folks.publishing.name')}</div>
        </div>
        {contentDOM()}
      </div>
    </div>
  );

  function setExpand(currTab) {
    if (tab === currTab) setTab('');
    else setTab(currTab);
  }

  function contentDOM() {
    if (tab === 'script') {
      return (
        <div className="folk__content expand__content script">
          <img src={Script} alt={t('folks.script.name')} />
          <div className="intro">
            {scriptDes.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      );
    }
    if (tab === 'comic') {
      return (
        <div className="folk__content expand__content comic">
          <img src={Comic} alt={t('folks.comic.name')} />
          <div className="intro">
            {comicDes.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      );
    }
    if (tab === 'publishing') {
      return (
        <div className="folk__content expand__content publishing">
          <img src={Slowork} alt={t('folks.publishing.name')} />
          <div className="intro">
            {publishingDes.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Folks;
