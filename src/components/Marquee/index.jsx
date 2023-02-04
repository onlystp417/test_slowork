import React, { useState, useEffect } from 'react';
import './index.sass';

const notifications = [
  {
    id: 1,
    content:
      '2023年1月31日（UDN）緬甸軍政府籌辦大選 分析家：恐引發更多流血事件',
      link: ''
  },
  {
    id: 2,
    content: '2023年1月31日（香港01）聯合國報告：緬甸在軍事政變後　罌粟種植再次擴大',
    link: ''
  },
  {
    id: 3,
    content: '2023年1月16日（BBC）緬甸特別諮詢委員會報告：全球十餘國公司幫助武裝該國軍政府',
    link: ''
  },
  {
    id: 4,
    content: '2023年1月13日（香港01）英國《衛報》報導，緬甸空軍戰機於當地時間1月10日，越境印度轟炸反政府的少數民族民間武裝組織欽民族軍（Chin National Army）。造成最少7人死亡、20人受傷。',
    link: ''
  },
  {
    id: 5,
    content: '2023年1月12日（關鍵評論網）一場泰國緝毒行動，意外起獲緬甸軍政府領導人成年子女資產',
    link: ''
  }
];

function Marquee() {
  const [animationSecs, setAnimationSecs] = useState(0);
  const ANIM_UNIT_SEC = 40;

  useEffect(() => {
    fetchNotifications();
  }, []);

  function notificationsDOM() {
    if (!notifications.length) return;
    else {
      const lineDOM = notifications.map(notify => <span key={notify.id}>{notify.content}</span>);
      return (
        <section className="marquee">
          <div className="marquee__content" style={{ animationDuration: `${animationSecs}s` }}>
            {lineDOM}
          </div>
          <div className="marquee__title">BREAKING NEWS</div>
        </section>
      );
    }
  }

  function fetchNotifications() {
    const seconds = notifications.length * ANIM_UNIT_SEC;
    setAnimationSecs(seconds);
  }

  return <>{notificationsDOM()}</>;
}

export default Marquee;
