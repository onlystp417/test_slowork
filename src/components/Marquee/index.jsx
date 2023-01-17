import React, { useState, useEffect } from 'react';
import './index.sass';

const notifications = [
  {
    id: 1,
    content:
      '2023年1月13日（香港01）英國《衛報》報導，緬甸空軍戰機於當地時間1月10日，越境印度轟炸反政府的少數民族民間武裝組織欽民族軍（Chin National Army）。造成最少7人死亡、20人受傷。'
  },
  {
    id: 2,
    content: '2023年1月12日（關鍵評論網）一場泰國緝毒行動，意外起獲緬甸軍政府領導人成年子女資產'
  }
];

function Marquee() {
  const [animationSecs, setAnimationSecs] = useState(0);
  const ANIM_UNIT_SEC = 20;

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
