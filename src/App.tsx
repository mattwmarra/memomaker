import React, { useState } from 'react';
import './App.css';
import DealMemoWrapper from './components/DealMemoWrapper';
import Form from './components/Form';

function App() {
  const [displayDocument, setDisplayDocument] = useState(false);

  const showDocument = () => {
    setDisplayDocument(true);
  };
  return (
    <div className="App">
      <h1>Memo Maker</h1>
      <Form showDocument={showDocument} />
      {displayDocument ? <DealMemoWrapper /> : null}
    </div>
  );
}

export default App;
