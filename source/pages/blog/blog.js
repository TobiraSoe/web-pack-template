import './blog.styl';
import createMenu from '../../components/menu/menu';

const menu = createMenu(['Main', 'in', 'blog'], 'nav');

document.body.appendChild(menu);

console.log('blog.js');