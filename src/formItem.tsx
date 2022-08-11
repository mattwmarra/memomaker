import React from 'react';

interface FormItemInterface {
  id: string;
  type: string;
  placeholder: string;
}

export default function FormItem(props: FormItemInterface) {
  const { id, type, placeholder } = props;
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <input type={type} id={type} placeholder={placeholder} required />
    </div>
  );
}
