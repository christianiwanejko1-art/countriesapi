import "./styles.css";
import icon from './icons/theme.svg';
import icon2 from './icons/magnify.svg';
import { fetchCountry } from "./requests";
export {};

const body = document.querySelector('body');

const main = document.createElement('div');
main.id = 'main';
const nav = document.createElement('nav');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Where in the world?';

const img = document.createElement('img');
img.src = icon;
img.id = 'modeIcon';

const mode = document.createElement('h1');
mode.classList.add('mode');
mode.textContent = 'Dark Mode';
const modeContainer = document.createElement('div');
modeContainer.id = 'modeContainer';
modeContainer.append(img, mode);

nav.append(title, modeContainer);

const search = document.createElement('div');
search.id = 'search';
const input = document.createElement('input');
input.type = 'search';
input.placeholder = 'Search for a country...';
input.className = 'search-input';
search.appendChild(input);
const icon3 = document.createElement('img');
icon3.className = 'search-icon';
icon3.src = icon2;
const searchWrapper = document.createElement('div');
searchWrapper.classList.add('searchWrapper');
searchWrapper.append(icon3,input)
search.appendChild(searchWrapper);

main.append(nav, search);
body.append(main);


async function init() {
  const data = await fetchCountry("France");
  console.log(data);
}
init();