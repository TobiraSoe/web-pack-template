import createMenu from './menu';

const menu = createMenu(['Main', 'Abot', 'Portfolio', 'Contacts']);

document.body.appendChild(menu);
console.log(menu);