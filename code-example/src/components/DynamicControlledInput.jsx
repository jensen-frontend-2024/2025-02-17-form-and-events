/* eslint-disable react/prop-types */
import { useEffect } from 'react';

export function DynanmicControlledInput({ id, label, onChange, type, value }) {
  useEffect(() => {
    console.log('DynanmicControlledInput rendered');
  });

  return (
    <div className="input-container">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className="input" id={id} onChange={onChange} type={type || 'text'} value={value} />
    </div>
  );
}
