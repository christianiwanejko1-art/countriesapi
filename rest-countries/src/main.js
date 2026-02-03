import "./styles.css";
import { fetchCountry, fetchAllCountries } from "./requests";

function renderHomepage() {
  const body = document.querySelector('body');

  const main = document.createElement('div');
  main.id = 'main';
  const nav = document.createElement('nav');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Where in the world?';

  const img = document.createElement('img');
  img.src = "./icons/theme.svg";;
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
  icon3.src = "./icons/magnify.svg";;
  const searchWrapper = document.createElement('div');
  searchWrapper.classList.add('searchWrapper');
  searchWrapper.append(icon3,input)
  search.appendChild(searchWrapper);
  const containerCountries = document.createElement('div');
  containerCountries.id = 'containerCountries';

  main.append(nav, search, containerCountries);


  body.append(main);

  async function createCard(country) {
  const data = await fetchCountry(country);
  console.log(data);
  const countries = document.getElementById('containerCountries');
  const card = document.createElement('div');
  card.classList.add('card');
  const cardTop = document.createElement('div');
  cardTop.classList.add('cardTop');
  cardTop.style.backgroundImage = `url(${data[0].flags.png})`
  const cardBottom = document.createElement('div');
  cardBottom.classList.add('cardBottom');

  const cardName = document.createElement('h1');
  cardName.innerHTML = `${data[0].name.common}`;
  cardName.classList.add('cardName');
  const cardPopulation = document.createElement('p');
  cardPopulation.classList.add('cardPopulation');
  cardPopulation.innerHTML =  `<span>Population:</span> ${data[0].population}`
  const cardRegion = document.createElement('p');
  cardRegion.classList.add('cardRegion');
  cardRegion.innerHTML = `<span>Region:</span> ${data[0].region}`;
  const cardCapital = document.createElement('p');
  cardCapital.classList.add('cardCapital');
  cardCapital.innerHTML = `<span>Capital:</span> ${data[0].capital}`;

  cardBottom.append(cardName, cardPopulation, cardRegion, cardCapital);

  card.append(cardTop, cardBottom);
 
  
  countries.appendChild(card);
}

async function init() {
  const data = await fetchCountry("United Kingdom");
  return data;
}
const country = init();

async function fetchInit() {
  const data = await fetchAllCountries();
  console.log(data);
  for (let i=0; i < data.length; i++){
    createCard(`${data[i].name.common}`)

  }

}
fetchInit();

}



renderHomepage()


// fetchInit();




// createCard('United Kingdom');