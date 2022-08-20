import React from 'react';
import FormItem from './FormItem';
import FormItemInterface from '../interfaces/FormItemInterface';

function FormSection({ name, object, handleChange, formState }) {
  const renderFields = (object) => {
    return Object.values(object).map((item: FormItemInterface) => {
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
    });
  };

  return (
    <>
      <h2>{name}</h2>
      {renderFields(object)}
    </>
  );
}

export default FormSection;
