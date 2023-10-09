import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PDFViewer.css'; // Import the CSS file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPageNumber(1);
  };

  useEffect(() => {
    if (numPages) {
      const thumbnailsArray = [];
      for (let i = 1; i <= numPages; i++) {
        thumbnailsArray.push(i);
      }
      setThumbnails(thumbnailsArray);
    }
  }, [numPages]);

  return (
    <div className="pdf-viewer-container">
      <div className="pdf-sidebar">
        {thumbnails.map((pageNum) => (
          <div
            key={pageNum}
            className={`thumbnail ${pageNum === pageNumber ? 'active' : ''}`}
            onClick={() => setPageNumber(pageNum)}
          >
            Page {pageNum}
          </div>
        ))}
      </div>
      <div className="pdf-main">
        <input type="file" onChange={onFileChange} />
        <div className="pdf-container">
          <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (pageNumber < numPages) {
              setPageNumber(pageNumber + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
