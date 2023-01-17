import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useTranslation } from 'react-i18next';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './index.sass';
import { openBuyLink } from '@/utils';
// resource
import zhComic from '@/assets/comics/zhTW.pdf';
import enComic from '@/assets/comics/en.pdf';
import thComic from '@/assets/comics/th.pdf';
// images
import { ReactComponent as FirstPage } from '@/assets/images/angle-double-left.svg';
import { ReactComponent as Prev } from '@/assets/images/angle-left.svg';
import { ReactComponent as Next } from '@/assets/images/angle-right.svg';
import { ReactComponent as LastPage } from '@/assets/images/angle-double-right.svg';
import { ReactComponent as Finger } from '@/assets/images/cursor-finger.svg';
import Comic from '@/assets/images/book-cover.png';

const comics = {
  zhTW: zhComic,
  en: enComic,
  th: thComic
};

const CHAPTER_PAGE_NUMBER = [12, 22, 31, 43, 50, 56, 63, 75, 80, 90, 99]; // 後四章為中文版 -2 頁數

function Reader() {
  // useEffect(() => {
  //   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  // }, []);
  const { t } = useTranslation();
  const [numPages, setNumPages] = useState(null); // 總頁數
  const [pageNumber, setPageNumber] = useState(1); // 頁
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true); // 總頁數
  const buyDes = t('buy.des', { returnObjects: true });
  const chapters = t('reading', { returnObjects: true });

  function onDocumentLoadSuccess({ numPages }) {
    setLoading(false);
    const lang = localStorage.getItem('lang');
    if (lang === 'zhTW') {
      setNumPages(76);
    } else {
      setNumPages(numPages + 2);
    }
  }

  function onChangeChapter(index) {
    if (localStorage.getItem('lang') === 'zhTW' && index > 6) return;
    setChapter(index);
    setPageNumber(CHAPTER_PAGE_NUMBER[index]);
  }

  function limitPage() {
    const lang = localStorage.getItem('lang');
    if (lang === 'zhTW') {
      return chapter > 6 ? 1 : pageNumber;
    } else {
      return pageNumber > 5 ? pageNumber - 2 : pageNumber;
    }
  }

  function lastPage() {
    const lang = localStorage.getItem('lang');
    if (lang === 'zhTW') {
      return 76;
    } else {
      return 114;
    }
  }

  return (
    <div className="reader">
      <section className="reader__chapter">
        <h2 className="reader__title">{t('readingTitle')}</h2>
        <p className="reader__subtitle">{t('readingSubTitle')}</p>
        <div className="chapter">
          {chapters.map((text, index) => (
            <button
              key={index}
              className={`${chapter === index ? 'active' : ''}`}
              onClick={() => onChangeChapter(index)}
              disabled={text.includes('請支持紙本')}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="desktop">{readerBuyDOM()}</div>
      </section>
      <section className="reader__main">
        <div className="reader__view">
          <div className={`loading-wrapper ${loading ? '' : 'hide'}`}>
            <div className="loading"></div>
          </div>
          {readerDOM()}
        </div>
        <div className="reader__operator">
          <button onClick={() => setPageNumber(1)} disabled={limitPage(pageNumber) === 1}>
            <FirstPage />
          </button>
          <button
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={limitPage(pageNumber) === 1}
          >
            <Prev />
          </button>
          <p>{pageNumber}</p>
          <button
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber === lastPage()}
          >
            <Next />
          </button>
          <button onClick={() => setPageNumber(numPages)} disabled={pageNumber === lastPage()}>
            <LastPage />
          </button>
        </div>
      </section>
      <div className="mobile-tablet">{readerBuyDOM()}</div>
    </div>
  );

  function readerBuyDOM() {
    return (
      <section className="reader__buy">
        <img src={Comic} alt={t('header.title')} />
        <div>
          <div className="des">
            {buyDes.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <button onClick={openBuyLink}>
            <Finger />
            <span>{t('buy.btn')}</span>
          </button>
        </div>
      </section>
    );
  }

  function readerDOM() {
    const isVisited = localStorage.getItem('isVisited');
    if (isVisited) {
      return (
        <Document
          file={comics[localStorage.getItem('lang')]}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadProgress={() => setLoading(true)}
        >
          <Page pageNumber={limitPage()} />
        </Document>
      );
    } else {
      return (
        <Document
          file={zhComic}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadProgress={() => setLoading(true)}
        >
          <Page pageNumber={limitPage()} />
        </Document>
      );
    }
  }
}

export default Reader;
