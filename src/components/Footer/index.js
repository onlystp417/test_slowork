import React from 'react';
import { useTranslation } from 'react-i18next';
import Slowork from '@/assets/images/slowork-logo.svg';

import './index.sass'

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__left">
        <p>{t('footer.organizer')}</p>
        <p>{t('footer.support')}</p>
        <p>{t('footer.thanks_list')}</p>
      </div>
      <div className="footer__right">
        <a href="">
          <img src={Slowork} alt="Slowork" />
        </a>
        <p className="footer-social">
          <a href="">IG</a>｜
          <a href="">FB</a>｜
          <a href="">Twitter</a>
        </p>
        <p className="mailto"><span>{t('footer.contact')}</span><a href="mailto:contact@sloworkpublishing.com">contact@sloworkpublishing.com</a></p>
      </div>
    </div>
  );
}

export default Footer;