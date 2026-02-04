import "./styles.css";
import { fetchCountry, fetchAllCountries, fetchIndividualCountry, fetchBorders } from "./requests";
function renderNav() {
  const body = document.querySelector('body');

  const mainContent = document.createElement('div');
  mainContent.id = 'mainContent';
  const nav = document.createElement('nav');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Where in the world?';

  const img = document.createElement('img');
  img.src = "/src/icons/theme.svg";;
  img.id = 'modeIcon';

  const mode = document.createElement('h1');
  mode.classList.add('mode');
  mode.textContent = 'Dark Mode';
  const modeContainer = document.createElement('div');
  modeContainer.id = 'modeContainer';
  modeContainer.append(img, mode);

  nav.append(title, modeContainer);
  mainContent.append(nav)
  body.appendChild(mainContent)
}

function renderHomepage() {
  const body = document.querySelector('body');

  const main = document.createElement('div');
  main.id = 'main';
  const nav = document.createElement('nav');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Where in the world?';

  const img = document.createElement('img');
  img.src = "/src/icons/theme.svg";;
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
  icon3.src = "/src/icons/magnify.svg";;
  const searchWrapper = document.createElement('div');
  searchWrapper.classList.add('searchWrapper');
  searchWrapper.append(icon3,input)
  search.appendChild(searchWrapper);
  const containerCountries = document.createElement('div');
  containerCountries.id = 'containerCountries';

  main.append(nav, search, containerCountries);


  body.append(main);

  async function createCard(country) {
  const data = country;
  const countries = document.getElementById('containerCountries');
  const card = document.createElement('div');
  card.classList.add('card');
  const cardTop = document.createElement('div');
  cardTop.classList.add('cardTop');
  if (data !== undefined){
    cardTop.style.backgroundImage = `url(${data.flags.png})`
  }
  const cardBottom = document.createElement('div');
  cardBottom.classList.add('cardBottom');

  const cardName = document.createElement('h1');
  if (data !== undefined){
    cardName.innerHTML = `${data.name.common}`;
  }
  cardName.classList.add('cardName');
  const cardPopulation = document.createElement('p');
  cardPopulation.classList.add('cardPopulation');
  if (data !== undefined){
    cardPopulation.innerHTML =  `<span>Population:</span> ${data.population}`
  }
  const cardRegion = document.createElement('p');
  cardRegion.classList.add('cardRegion');
  if (data !== undefined){
    cardRegion.innerHTML = `<span>Region:</span> ${data.region}`;
  }
  const cardCapital = document.createElement('p');
  cardCapital.classList.add('cardCapital');
  if (data !== undefined){
    cardCapital.innerHTML = `<span>Capital:</span> ${data.capital}`;
  }

  cardBottom.append(cardName, cardPopulation, cardRegion, cardCapital);

  card.append(cardTop, cardBottom);
  card.addEventListener("click",async (e)=>{
    renderNav();
    const main = document.getElementById('main');
    const card = e.target.closest('.card');
    const name = card.querySelector('.cardName').textContent;
    main.style.display = 'none';
    const data = await fetchIndividualCountry(name);
    // const mainContent = document.createElement('mainContent');
    const back = document.createElement('div');
    back.classList.add('back');
    const backBtn = document.createElement('button');
    backBtn.classList.add('backBtn');
    backBtn.textContent = 'Back';


    const leftSide = document.createElement('div');
    leftSide.classList.add('leftSide');
    leftSide.style.backgroundImage = `url(${data[0].flags.png})`
    const rightSide = document.createElement('div');
    rightSide.classList.add('rightSide');

    // right side - split into 3 sections
    const rightSideInfoLeft = document.createElement('div');
    const rightSideInfoRight = document.createElement('div');
    rightSideInfoLeft.classList.add('rightSideInfoLeft');
    rightSideInfoRight.classList.add('rightSideInfoRight');
    const rightSideTitle = document.createElement('h1');
    rightSideTitle.classList.add('rightSideTitle');
    rightSideTitle.textContent = `${data[0].name.common}`
    // native name
    const rightSideNativeName = document.createElement('p');
    const data2 = data[0].name.nativeName;
    const first = Object.values(data2);
    const nativeName = Object.values(first)[0].official;
    rightSideNativeName.innerHTML =  `<span class='countryInfo'>Native Name:</span> ${nativeName}`;
    // population
    const rightSidePopulation = document.createElement('p');
    const population = data[0].population;
    rightSidePopulation.innerHTML = `<span class='countryInfo'>Population:</span> ${population}`;
    // region
    const rightSideRegion = document.createElement('p');
    const region = data[0].region;
    rightSideRegion.innerHTML = `<span class='countryInfo'>Region:</span> ${region}`;
    // sub region
    const rightSideSubRegion = document.createElement('p');
    const subregion = data[0].subregion;
    rightSideSubRegion.innerHTML = `<span class='countryInfo'>Sub Region:</span> ${subregion}`;
    // capital
    const rightSideCapital = document.createElement('p');
    const capital = data[0].capital[0];
    rightSideCapital.innerHTML = `<span class='countryInfo'>Capital:</span> ${capital}`;
    rightSideInfoLeft.append(rightSideNativeName, rightSidePopulation, rightSideRegion, rightSideSubRegion, rightSideCapital);


    // Top Level Domain
    const rightSideTLD = document.createElement('p');
    const tld = data[0].tld[0];
    rightSideTLD.innerHTML = `<span class='countryInfo'>Top Level Domain:</span> ${tld}`;
    // Currencies
    const rightsideCurrencies = document.createElement('p');
    const currencies = data[0].currencies;
    const currenciesFirst = Object.values(currencies)[0].name;
    rightsideCurrencies.innerHTML = `<span class='countryInfo'>Currencies:</span> ${currenciesFirst}`;
    // Languages
    const rightSideLanguages = document.createElement('p');
    const languages = data[0].languages
    const lang = Object.values(languages);
    const langStr = lang.join(', ');
    rightSideLanguages.innerHTML = `<span class='countryInfo'>Languages:</span> ${langStr}`;

    // border countries
    const borderContainer = document.createElement('div');
    borderContainer.classList.add('borderContainer');
    const borderTitle = document.createElement('h1');
    borderTitle.textContent = 'Border Countries:';
    const dataBorders = data[0].borders;
    if (dataBorders !== undefined){
      const fetchPromises = dataBorders.map(border => fetchBorders(border));
      const countryArray = await Promise.all(fetchPromises);
      countryArray.forEach((border)=>{
        console.log(border[0].name.common);
      })
    }



    rightSide.append(rightSideTitle,rightSideInfoLeft,rightSideInfoRight, borderContainer);
    rightSideInfoRight.append(rightSideTLD, rightsideCurrencies, rightSideLanguages);


    backBtn.addEventListener('click', ()=>{
      const main = document.getElementById('main');
      main.remove()
      const mainContent = document.getElementById('mainContent');
      renderHomepage();
      main.style.display = 'grid';
      mainContent.remove();
    });
    back.appendChild(backBtn);
    mainContent.append(back, leftSide, rightSide);
    const body = document.querySelector('body');
    body.appendChild(mainContent);
  })
  
  countries.appendChild(card);
}

// function renderCountry() {

// }

// async function init() {
//   const data = await fetchCountry("United Kingdom");
//   return data;
// }
// const country = init();

async function fetchInit() {
  const data = await fetchAllCountries();
  data.forEach(country => {
    try {
      if (country.name && country.name.official) {
        createCard(country);
      }
    } catch (error) {
      console.error("Error creating card for:", country, error);
    }
  });

}
fetchInit();

}

renderHomepage()



