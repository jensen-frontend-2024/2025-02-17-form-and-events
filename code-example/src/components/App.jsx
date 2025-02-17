import { ControlledInput } from './ControlledInput';
import { UncontrolledInput } from './UncontrolledInput';

export function App() {
  return (
    <>
      <h1>Controlled Input</h1>
      <ControlledInput />
      <hr />
      <h1>Uncontrolled Input</h1>
      <UncontrolledInput />
    </>
  );
}
