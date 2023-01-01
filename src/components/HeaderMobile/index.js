import React, { useRef, useState } from 'react';
import './index.sass';
import { useTranslation } from 'react-i18next';
// images
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as Menu } from '@/assets/images/menu.svg';
import { ReactComponent as Close } from '@/assets/images/close.svg';
import { ReactComponent as Cart } from '@/assets/images/cart.svg';

function HeaderMobile({ onScrollTo }) {
  const { t, i18n } = useTranslation();
  const menuSwitch = useRef(null);
  const [link, setLink] = useState('about');

  async function setLang(lang) {
    localStorage.setItem('lang', lang);
    const locale = localStorage.getItem('lang');
    i18n.changeLanguage(locale);
  }

  function toLink(name) {
    setLink(name);
    onScrollTo(name);
  }

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
              {menuDOM()}
              <button className="btn buy">
                <Cart className="pointer" />
                <span>{t('header.buy')}</span>
              </button>
              <div className="langs">
                <button
                  className={`btn ${i18n.language === 'zhTW' ? 'active' : ''}`}
                  onClick={() => setLang('zhTW')}
                >
                  中
                </button>
                <button
                  className={`btn ${i18n.language === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  EN
                </button>
                <button
                  className={`btn ${i18n.language === 'bu' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  မြန်မာ
                </button>
                <button
                  className={`btn ${i18n.language === 'th' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  ไทย
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );

  function menuDOM() {
    if (i18n.language === 'zhTW') {
      return (
        <>
          <div
            className={`link ${link === 'about' ? 'active' : ''}`}
            onClick={() => toLink('about')}
          >
            {t('header.about')}
          </div>
          <div
            className={`link ${link === 'read' ? 'active' : ''}`}
            onClick={() => toLink('read')}
          >
            {t('header.read')}
          </div>
          <div className={`link ${link === 'podcast' ? 'active' : ''}`} onClick={() => toLink('podcast')}>
            Podcast
          </div>
          <div
            className={`link ${link === 'campaigns' ? 'active' : ''}`}
            onClick={() => toLink('campaigns')}
          >
            {t('header.campaigns')}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className={`link ${link === 'about' ? 'active' : ''}`}
            onClick={() => toLink('about')}
          >
            {t('header.about')}
          </div>
          <div
            className={`link ${link === 'read' ? 'active' : ''}`}
            onClick={() => toLink('read')}
          >
            {t('header.read')}
          </div>
        </>
      );
    }
  }
}

export default HeaderMobile;
