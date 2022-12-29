import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './App.sass';
// resource
import zhComic from '@/assets/comics/zhTW.pdf';
import enComic from '@/assets/comics/en.pdf';

function App() {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);
  // const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(5);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <div className='reader'>
      <Document file={zhComic} width='300px'>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className='pagenation'>
        <div>
          <button className='btn' onClick={() => setPageNumber(1)}>
            &#171;
          </button>
          <button className='btn' onClick={() => setPageNumber(pageNumber - 1)}>
            &#8249;
          </button>
        </div>
        <span>{pageNumber}</span>
        <div>
          <button className='btn' onClick={() => setPageNumber(pageNumber + 1)}>
            &#8250;
          </button>
          <button className='btn' onClick={() => setPageNumber(114)}>
            &#187;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
