import React from 'react';
import FormItemInterface from '../interfaces/FormItemInterface';

export default function FormItem(
  { id, type, placeholder, name, value }: FormItemInterface,
  { handleChange },
) {
  const renderSwitch = (type, id, placeholder) => {
    switch (type) {
      case 'longtext':
        return (
          <textarea
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
            required
            defaultValue={value}
          />
        );
      default:
        return (
          <input
            type={type}
            id={type}
            placeholder={placeholder}
            required
            defaultValue={value}
            onChange={handleChange}
          />
        );
    }
  };
  return (
    <div className="form-item">
      <label htmlFor={id}>{name}:</label>
      {renderSwitch(type, id, placeholder)}
    </div>
  );
}
