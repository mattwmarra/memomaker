import React, { useState } from 'react';
import NavBar from './components/NavBar';
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
      <NavBar />
      <Form showDocument={showDocument} />
      {displayDocument ? <DealMemoWrapper /> : null}
    </div>
  );
}

export default App;
