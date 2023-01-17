import React from 'react';
import { useTranslation } from 'react-i18next';
// images
import { ReactComponent as DropArrow } from '@/assets/images/caret-right-pink.svg';
import Event from '@/assets/images/event.png';

import './index.sass';

function Campaigns() {
  const { t } = useTranslation();
  const listArray = t('campaigns.list', { returnObjects: true });
  return (
    <div className="campaign">
      <div className="campaign__title">{t('campaigns.title')}</div>
      <div className="campaign__list">
        {listArray.map(item => (
          <div className="campaign__item expand" key={item.id}>
            <label className="campaign__header expand__header" htmlFor={item.id}>
              <input type="checkbox" id={item.id} />
              <DropArrow className="drop" />
              <div className="title">{item.title}</div>
            </label>
            <div className="campaign__content expand__content">
              <div className="info">
                <p>
                  <span>日期</span>
                  {item.date}
                </p>
                {item.time ? (
                  <p>
                    <span>時間</span>
                    {item.time}
                  </p>
                ) : (
                  ''
                )}
                {item.location ? (
                  <p>
                    <span>地點</span>
                    {item.location}
                  </p>
                ) : (
                  ''
                )}
                {item.speaker ? (
                  <p>
                    <span>講者</span>
                    {item.speaker}
                  </p>
                ) : (
                  ''
                )}
              </div>
              <div className="des">
                <span>簡介</span>
                {item.intro}
              </div>
              {item.link ? (
                <div className="link">
                  <span>報名：</span>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.link}
                  </a>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="campaign__img">
        <img src={Event} />
      </div>
    </div>
  );
}

export default Campaigns;
