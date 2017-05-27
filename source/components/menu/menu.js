import './menu.styl';

export default function(array, className) {
    let menu = document.createElement("ul");
    menu.className = className;
    let listItems = '';

    array.forEach((item) => {
        listItems += `<li><a href="#">${item}</a></li>`;
    });
    menu.innerHTML = listItems;

    return menu;
}