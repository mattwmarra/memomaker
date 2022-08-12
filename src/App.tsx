import { PDFViewer } from '@react-pdf/renderer';
import React, { useState } from 'react';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer.ts';
import DealMemo from './components/DealMemo.tsx';
import labels from './data/formLabels.ts';
import FormItem from './components/FormItem';
import FormItemInterface from './interfaces/FormItemInterface';
import { useDispatch } from 'react-redux';
import { populateForm } from './reducers/rootReducer';
import DealMemoWrapper from './components/DealMemoWrapper';
function App() {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    artist: '',
    loanOut: '',
    project: '',
    company: '',
    compensation: {
      numerical: 0,
      textual: '',
    },
    contigency: '',
    guarantee: '',
    dates: [Date],
    location: '',
    payment: '',
    wireInformation: '',
    workDay: 0,
    postProdDays: 0,
    transportation: '',
    dressingRoom: '',
    directorsMeeting: '',
    perDiem: 0,
    billingBlock: '',
    approvals: 0,
    merchandising: '',
    union: '',
    fo: '',
    idemnities: '',
    provisions: '',
    MHWardrobe: '',
    security: 0,
    assistant: 0,
    premiereTickets: 0,
    physicalCopy: '',
    signed: false,
  });

  const handleSubmit = () => {
    dispatch(populateForm(formState));
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e?.target?.id]: e?.target.value,
    });
  };

  return (
    <div className="App">
      <h1>Memo Maker</h1>
      <div className="object-list">
        {Object.values(labels).map((item: FormItemInterface) => {
          return (
            <FormItem
              name={item.name}
              id={item.id}
              key={item.id}
              type={item.type}
              description={item.description}
              placeholder={item.placeholder}
              handleChange={handleChange}
              value={formState[item.id]}
            />
          );
        })}
      </div>
      <button type="button" onClick={handleSubmit}>
        Generate Document
      </button>
      <DealMemoWrapper />
    </div>
  );
}

export default App;
