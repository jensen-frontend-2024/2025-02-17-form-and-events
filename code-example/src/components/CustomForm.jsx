import { useEffect, useState } from 'react';
import { DynanmicControlledInput } from './DynamicControlledInput';

export function CustomForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
    });
  };

  useEffect(() => {
    console.log('CustomForm rendered');
  });

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <DynanmicControlledInput
        label="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <DynanmicControlledInput
        label="email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
      />
      <DynanmicControlledInput
        label="password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
