/* eslint-disable react/prop-types */
// import { useEffect } from 'react';

export function DynanmicControlledInput({ id, label, onChange, type, valid, value }) {
  const classNames = ['input-container'];

  if (valid === true) classNames.push('valid');
  if (valid === false) classNames.push('error');
  
  // useEffect(() => {
  //   console.log('DynanmicControlledInput rendered');
  // });

  return (
    <div className={classNames.join(' ')}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className="input" id={id} onChange={onChange} type={type || 'text'} value={value} />
    </div>
  );
}
