import React, { useRef, useState } from 'react';
import './index.sass';
import { useTranslation } from 'react-i18next';
// images
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as Menu } from '@/assets/images/menu.svg';
import { ReactComponent as Close } from '@/assets/images/close.svg';
import { ReactComponent as Cart } from '@/assets/images/cart.svg';

function App() {
  const { t, i18n } = useTranslation();
  const menuSwitch = useRef(null);
  const [link, setLink] = useState('about');
  return (
    <header className="header">
      <div className="justify-between">
        <Logo className="logo" />
        <label htmlFor="menu" className="menu pointer">
          <Menu className="pointer" />
        </label>
        <input type="checkbox" id="menu" ref={menuSwitch} />
        <div className="header__operator">
          <div className="nav-layer" onClick={() => menuSwitch.current.click()} />
          <nav className="header__nav">
            <Close className="nav-close pointer" onClick={() => menuSwitch.current.click()} />
            <div className="links">
              <div
                className={`link ${link === 'about' ? 'active' : ''}`}
                onClick={() => setLink('about')}
              >
                {t('header.about')}
              </div>
              <div
                className={`link ${link === 'read' ? 'active' : ''}`}
                onClick={() => setLink('read')}
              >
                {t('header.read')}
              </div>
              <div
                className={`link ${link === 'campaigns' ? 'active' : ''}`}
                onClick={() => setLink('campaigns')}
              >
                {t('header.campaigns')}
              </div>
              <div
                className={`link ${link === 'buy' ? 'active' : ''}`}
                onClick={() => setLink('buy')}
              >
                {t('header.buy')}
              </div>
              <button className="btn buy">
                <Cart className="pointer" />
                <span>購買本書</span>
              </button>
              <div className="langs">
                <button className="btn">中</button>
                <button className="btn">EN</button>
                <button className="btn">မြန်မာ</button>
                <button className="btn">ไทย</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default App;
