import React, { Children } from 'react';
import { useSelector } from 'react-redux';
import DealMemo from './DealMemo';
import { PDFViewer } from '@react-pdf/renderer';

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
