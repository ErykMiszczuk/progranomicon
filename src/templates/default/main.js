import { text } from './program';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <p class="read-the-docs">
      ${text()}
    </p>
  </div>
`;
