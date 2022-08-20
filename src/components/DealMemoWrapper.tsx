import React from 'react';
import { useSelector } from 'react-redux';
import { PDFViewer } from '@react-pdf/renderer';
import DealMemo from './DealMemo';

function DealMemoWrapper() {
  const formData = useSelector((state) => state);
  return (
    <div>
      <PDFViewer className="pdf-viewer">
        <DealMemo className="pdf-viewer" data={formData} />
      </PDFViewer>
    </div>
  );
}

export default DealMemoWrapper;
