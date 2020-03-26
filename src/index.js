import register from 'preact-custom-element';
import { Counter } from './components';

console.log(Counter);

register(Counter, 'my-counter');
