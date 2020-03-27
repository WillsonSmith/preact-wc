import { h } from 'preact';
import { useState } from 'preact/hooks';
import { ShadowDOM, Shadow } from '../../util/preact-shadow-dom';
// import styles from './styles.css';

const styles = `
:host {
  --spacing: 1.6rem;
}

.Wrapper {
  padding: var(--spacing);
}
`;

export const Counter = () => {
  const [count, setCount] = useState(0);
  const update = value => {
    setCount(value);
  };

  return (
    <div class="Wrapper">
      <div>Count: {count}</div>
      <button onClick={() => update(count + 1)}>Increment</button>
    </div>
  );
};

//shadow dom breaks component, i think events get lost
export const ShadowCounter = ShadowDOM(Counter, styles);
