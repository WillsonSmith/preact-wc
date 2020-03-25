import { h } from 'preact';
import { useState } from 'preact/hooks';
import ShadowDOM from '../../util/preact-shadow-dom';

import styles from './styles.css';

export const Counter = ShadowDOM(() => {
  const [count, setCount] = useState(0);

  return (
    <div class="Wrapper">
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}, styles);
