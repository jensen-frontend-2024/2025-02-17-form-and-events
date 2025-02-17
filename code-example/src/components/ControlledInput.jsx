import { useEffect, useState } from 'react';

export function ControlledInput() {
  const [value, setValue] = useState('jkhsakdfhalksjf');

  // We can extract the event handler to its own function if the code is more complex.
  // const handleOnChange = (e) => {
  //   setValue(e.target.value);
  // };

  useEffect(() => {
    console.log("ControlledInput rendered")
  })

  return (
    <form className="form">
      <input onChange={(e) => setValue(e.target.value)} type="text" value={value} />
    </form>
  );
}
