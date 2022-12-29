import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './index.sass';
// resource
import zhComic from '@/assets/comics/zhTW.pdf';
import enComic from '@/assets/comics/en.pdf';

function Reader() {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(5);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="reader">
      <Document file={zhComic} width="300px" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      {/* <button onClick={setPageNumber(1)}>&#171;</button>
      <button onClick={setPageNumber(pageNumber - 1)}>&#8249;</button>
      <button onClick={setPageNumber(pageNumber + 1)}>&#8250;</button>
      <button onClick={setPageNumber(114)}>&#187;</button> */}
      <p>
        {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Reader;
