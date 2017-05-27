import './index.styl';
import 'normalize.css';

import createMenu from '../../components/menu/menu';
const menu = createMenu(['Main', 'in', 'index'], 'nav');
document.body.appendChild(menu);

console.log('index.js');