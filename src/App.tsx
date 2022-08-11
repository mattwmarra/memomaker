import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer.ts';
import DealMemo from './DealMemo.tsx';
import labels from './formLabels.ts';
import FormItem from './formItem';
function App() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <div className="App">
      <h1>Memo Maker</h1>
      <div className="object-list">
        {Object.values(labels).map((item) => {
          return (
            <FormItem
              name={item.name}
              id={item.id}
              type={item.type}
              placeholder={item.placeholder}
            />
          );
        })}
      </div>
      <button type="button">Generate Report</button>
    </div>
  );
}

export default App;
