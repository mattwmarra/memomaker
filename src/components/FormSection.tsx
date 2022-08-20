import React from 'react';
import FormItem from './FormItem';
import FormItemInterface from '../interfaces/FormItemInterface';

function FormSection({ name, object, handleChange, formState }) {
  const renderFields = (object) => {
    const cssClass = name.split(' ')[0].toLowerCase();

    return (
      <section className={`form-section section-${cssClass}`}>
        <h3>{name}</h3>
        {Object.values(object).map((item: FormItemInterface) => {
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
      </section>
    );
  };

  return <>{renderFields(object)}</>;
}

export default FormSection;
