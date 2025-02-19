# 2025-02-17-form-and-events

We learn to handle forms in React with the proper tools and we also talk about controlled vs uncontrolled components.

<details open>
<summary>Table of content</summary>

- [Forms](#forms)
- [onChange and the value prop](#onchange-and-the-value-prop)
- [useRef and the ref prop](#useref-and-the-ref-prop)
- [Controlled Component](#controlled-component)
- [Uncontrolled Component](#uncontrolled-component)
- [Summary](#summary)

</details>

## Forms

Forms are a fundamental part of web applications. They allow users to input data, such as text, emails, passwords, or selections, and submit it to the application.

In React, handling form inputs is different from traditional HTML because React uses state to control the values of input fields.

A basic form in plain HTML:

```html
<form>
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>
```

However, in React, we often use state or refs to manage form data.

[Back to top](#2025-02-17-form-and-events)

## onChange and the value prop

React uses **controlled components** to manage form inputs through state. The `onChange` event updates the state whenever the user types.

### Example of a controlled input:

```jsx
import { useEffect, useState } from 'react';

export function ControlledInput() {
  const [value, setValue] = useState('');

  // We can extract the event handler to its own function if the code is more complex.
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("ControlledInput rendered")
  })

  return (
    <form className="form">
      <input onChange={(e) => setValue(e.target.value)} type="text" value={value} />
    </form>
  );
}
```

### Explanation:

1. `useState` holds the value of the input.
2. `value={text}` ensures that the input field is always in sync with React state.
3. `onChange={(e) => setText(e.target.value)}` updates the state whenever the user types.

This is useful for validation, real-time updates, and controlled behavior. But remember, every time you type something inside the input field, React will trigger a rerender because of it, since the value is tied to the state variable. And every time a state variable change _( or props change )_ React WILL force the component to rerender.

[Back to top](#2025-02-17-form-and-events)

## useRef and the ref prop

Another way to access form values is by using **refs** instead of state. This is useful when you don’t need real-time control but want to access the value when needed. This is called a **uncontrolled component**.

### Example of an uncontrolled input using `useRef`:

```jsx
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
```

### Explanation:

1. `useRef(null)` creates a reference to the input field.
2. `ref={inputRef}` connects the reference to the input.
3. `inputRef.current.value` retrieves the value when needed.

This method is useful when integrating with third-party libraries or when managing form data without triggering re-renders. But why doesn't it trigger a rerender? It's beacuse the ref-variable in itself is just a wrapping object to the element OR value it represents. Since the reference is just a pointer to the location in the storage where the element or the value is store, it will always be constant. To access the actual valaue, you must access the `.current`-attribute. It holds the actual value of the ref. 

So whenever you type something in the input field, the DOM that holds the data will keep the value updated but since React is NOT listening to it, it can't because it's concealed inside an object, it will not trigger a rerender. Which is a good thing in many cases.

In short, `useRef` cand be used in two ways. The first and most common one is to create a refernece ot an actual DOM-element. It's done together with te `ref`-attribute on the element. 

It can also be used to store regular values that we do NOT want React to trigger rerenders on. Use cases are many, for instance, let's say you have a game application and you want to keep track of a score variable, but you don't want React to rerender something whenever the score is updated.

[Back to top](#2025-02-17-form-and-events)

## Controlled Component

A controlled component is a form input where React is in full control of the value. Instead of letting the browser handle the input's state internally, React manages it via useState.

The input’s value is always determined by React state.
Any change in the input field is handled by an event (usually onChange), which updates the state.
The input field does not store its own value—it always reflects what’s stored in React’s state.

### Pros:

✅ Easy to validate input.
✅ React has full control over the value.
✅ Useful for real-time updates (e.g., showing character count).

### Cons:

❌ Can cause **unnecessary re-renders** if not optimized.

[Back to top](#2025-02-17-form-and-events)

## Uncontrolled Component

An uncontrolled component is a form input where React does not directly manage the value using state. Instead, the input manages its own state internally, just like in traditional HTML forms.

This means that the value of an input field is stored inside the DOM itself, rather than being controlled by React’s `useState`. Instead of updating the state on every change, you typically access the value only when needed, using refs.

### Pros:

✅ **Better performance** since React does not re-render on every keystroke.
✅ Useful for **file inputs** (since they can’t be controlled).
✅ Simple when **you only need the value on submit**.

### Cons:

❌ Harder to **validate** in real time.
❌ Cannot easily update the input value dynamically.

[Back to top](#2025-02-17-form-and-events)

### **When to Use Controlled vs. Uncontrolled Components?**

| Feature          | Controlled                               | Uncontrolled                              |
| ---------------- | ---------------------------------------- | ----------------------------------------- |
| State Management | Managed by React (`useState`)            | Managed by the DOM (`useRef`)             |
| Re-renders       | Updates state on every change            | Does not trigger re-renders               |
| Use Case         | Validation, dynamic inputs, live updates | Simple forms, performance-sensitive cases |

For most forms, **controlled components** are preferred, but **uncontrolled components** are useful for performance optimization and specific use cases.

## Summary

- **Controlled Components** use state and `onChange` to manage input.
- **Uncontrolled Components** use `useRef` to access the value only when needed.
- **`onChange` + `value`** is used for controlled components.
- **`ref`** is used for uncontrolled components.

[Back to top](#2025-02-17-form-and-events)
