import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import initialState from '../initialState';
import { populateForm } from '../reducers/rootReducer';
import {
  primary,
  production,
  agency,
  manager,
  compensation,
  details,
  agreements,
} from '../data/formItems.ts';
import FormSection from './FormSection';

function Form({ showDocument }) {
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(populateForm(formState));
    showDocument();
  };
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e?.target?.id]: e?.target.value,
    });
  };

  return (
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
        name="Manager Information"
        object={manager}
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
      <button type="button" onClick={handleSubmit}>
        Generate Document
      </button>
    </div>
  );
}

export default Form;
function dispatch(arg0: { payload: undefined; type: string }) {
  throw new Error('Function not implemented.');
}
