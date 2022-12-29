import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useTranslation } from 'react-i18next';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './index.sass';
// resource
import zhComic from '@/assets/comics/zhTW.pdf';
import enComic from '@/assets/comics/en.pdf';

const comics = {
  zhTW: zhComic,
  en: enComic,
}

function Reader() {
  const { i18n } = useTranslation()
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);
  // const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(5);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <div className="reader">
      {/* <Document file={zhComic} onLoadSuccess={onDocumentLoadSuccess}> */}
      <Document file={comics[i18n.language]}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="reader__operator">
        <button onClick={() => setPageNumber(1)}>&#171;</button>
        <button onClick={() => setPageNumber(pageNumber - 1)}>&#8249;</button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>&#8250;</button>
        <button onClick={() => setPageNumber(114)}>&#187;</button>
        <p>
          pageNumber
        </p>
      </div>
    </div>
  );
}

export default Reader;
