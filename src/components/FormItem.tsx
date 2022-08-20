import React from 'react';

export default function FormItem({
  id,
  type,
  placeholder,
  name,
  value,
  handleChange,
  description,
}) {
  const onChange = (e) => {
    handleChange(e);
  };
  const renderSwitch = (type, id, placeholder) => {
    switch (type) {
      case 'longtext':
        return (
          <textarea
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
            required
            value={value}
          />
        );
      case 'date':
        return (
          <div>
            <input type="date" />
          </div>
        );
      case 'radio':
        return (
          <>
            <label htmlFor="payOrPlay">Pay</label>
            <input type="radio" name="payOrPlay" id="payOrPlay" value="Pay" />
            <label htmlFor="payOrPlay">Play</label>
            <input type="radio" name="payOrPlay" id="payOrPlay" value="Play" />
          </>
        );
      default:
        return (
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            required
            value={value}
            onChange={onChange}
          />
        );
    }
  };
  return (
    <div className="form-item">
      <div>
        <label htmlFor={id}>{name}:</label>
        <p>{description}</p>
      </div>
      {renderSwitch(type, id, placeholder)}
    </div>
  );
}
