export async function fetchCountry(name) {
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return await res.json();
}


module.exports = { fetchCountry };