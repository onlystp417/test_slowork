import React, { useRef, useState } from 'react';
import './index.sass';
import { useTranslation } from 'react-i18next';
// images
import Logo from '@/assets/images/logo.svg';
import { ReactComponent as Menu } from '@/assets/images/menu.svg';
import { ReactComponent as Cart } from '@/assets/images/cart.svg';

function HeaderTablet({ onScrollTo }) {
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
        <img src={Logo} />
        <div className="menu pointer">
          <Menu className="pointer" />
        </div>
        <div className="header__operator">
          <div className="nav-layer" onClick={() => menuSwitch.current.click()} />
          <nav className="header__nav">
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
                  onClick={() => setLang('bu')}
                >
                  မြန်မာ
                </button>
                <button
                  className={`btn ${i18n.language === 'th' ? 'active' : ''}`}
                  onClick={() => setLang('th')}
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

export default HeaderTablet;
