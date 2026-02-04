export async function fetchCountry(name) {
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fields=name,flags,population,region,capital`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return await res.json();
}

export async function fetchAllCountries(){
  const url =  'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3'
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return await res.json()
}

export async function fetchIndividualCountry(name){
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return await res.json();
}

export async function fetchBorders(borderAbr){
  const url = `https://restcountries.com/v3.1/alpha?codes=${borderAbr}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return await res.json();
}

// Country name, native name, population, region, sub region, capital, top level domain, currencies, languages
