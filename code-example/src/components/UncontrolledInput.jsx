import { useEffect, useRef } from 'react';

export function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    console.log(value);
  };

  useEffect(() => {
    console.log('UncontrolledInput rendered');
  });

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
