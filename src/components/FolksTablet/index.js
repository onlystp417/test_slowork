import React, { useState, useRef } from 'react';
import { ReactComponent as DropArrow } from '@/assets/images/caret-right.svg';

import { useTranslation } from 'react-i18next';

import Script from '@/assets/images/script.png';
import Comic from '@/assets/images/comic.png';
import Slowork from '@/assets/images/slowork-logo-square.png';

import './index.sass';

function Folks() {
  const { t } = useTranslation();
  const [currentExpand, setCurrentExpand] = useState('');
  const scriptDes = t('folks.script.des', { returnObjects: true });
  const comicDes = t('folks.comic.des', { returnObjects: true });
  const publishingDes = t('folks.publishing.des', { returnObjects: true });

  return (
    <div className="folks">
      <div className="folk">
        <div className="folk__header expand__header" onClick={() => setExpand('script')}>
          <input type="checkbox" id="script" checked={currentExpand === 'script'} />
          <DropArrow className="drop" />
          <div className="title">{t('folks.script.name')}</div>
        </div>
        <div className="folk__header expand__header" onClick={() => setExpand('comic')}>
          <input type="checkbox" id="comic" checked={currentExpand === 'comic'} />
          <DropArrow className="drop" />
          <div className="title">{t('folks.comic.name')}</div>
        </div>
        <div className="folk__header expand__header" onClick={() => setExpand('publishing')}>
          <input type="checkbox" id="publishing" checked={currentExpand === 'publishing'} />
          <DropArrow className="drop" />
          <div className="title">{t('folks.publishing.name')}</div>
        </div>
        {contentDOM()}
      </div>
    </div>
  );

  function setExpand(name) {
    if (currentExpand === name) setCurrentExpand('');
    else setCurrentExpand(name);
  }

  function contentDOM() {
    if (currentExpand === 'script') {
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
    if (currentExpand === 'comic') {
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
    if (currentExpand === 'publishing') {
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
