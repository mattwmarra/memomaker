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
import {
  primary,
  production,
  agency,
  manager,
  compensation,
  details,
  agreements,
} from './data/formItems.ts';
import FormSection from './components/FormSection';
function App() {
  const dispatch = useDispatch();
  const [displayDocument, setDisplayDocument] = useState(false);
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
    setDisplayDocument(true);
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
        <FormSection
          name="Primary Information"
          object={primary}
          handleChange={handleChange}
          formState={formState}
        />
        <FormSection
          name="Production Company Information"
          object={production}
          handleChange={handleChange}
          formState={formState}
        />
        <FormSection
          name="Agency Information"
          object={agency}
          handleChange={handleChange}
          formState={formState}
        />
        <FormSection
          name="Compensation"
          object={compensation}
          handleChange={handleChange}
          formState={formState}
        />
        <FormSection
          name="Additional Details"
          object={details}
          handleChange={handleChange}
          formState={formState}
        />
        <FormSection
          name="Special Agreements"
          object={agreements}
          handleChange={handleChange}
          formState={formState}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Generate Document
      </button>
      {displayDocument ? <DealMemoWrapper /> : null}
    </div>
  );
}

export default App;
