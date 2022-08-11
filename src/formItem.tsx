import React from 'react';

interface FormItemInterface {
  id: string;
  type: string;
  placeholder: string;
  name: string;
}

export default function FormItem(props: FormItemInterface) {
  const { id, type, placeholder, name } = props;

  const renderSwitch = (type, id, placeholder) => {
    switch (type) {
      case 'longtext':
        return <textarea id={id} placeholder={placeholder} required />;
      default:
        return (
          <input type={type} id={type} placeholder={placeholder} required />
        );
    }
  };
  return (
    <div>
      <label htmlFor={id}>{name}: </label>
      {renderSwitch(type, id, placeholder)}
    </div>
  );
}
