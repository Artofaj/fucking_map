import * as env from "../env.json";

const baseUrl = env.API_BASE_URL;

async function fetchFromApi(endpoint) {
  return (await fetch(endpoint)).json();
}

export function fetchCountries() {
  const url = `${baseUrl}/api/countries/`;

  return fetchFromApi(url);
}

export function fetchCommodities() {
  const url = `${baseUrl}/api/commodities`;

  return fetchFromApi(url);
}

export function fetchCountryByCommodity(commodity) {
  const url = `${baseUrl}/api/countries_by_commodity/?commodity=${commodity}`;

  return fetchFromApi(url);
}

export function fetchCommoditiesByCountry(country) {
  const url = `${baseUrl}/api/commodities_by_country/${country}/`;

  return fetchFromApi(url);
}

export function fetchGADM0Geometries() {
  const url = "geojson/GADM_ADM0_SPARSE.geojson";

  return fetchFromApi(url);
}

export function writeToStore(promise, store) {
  promise
    .then(({ result }) => {
      store.set(result);
    })
    .catch((e) => {
      alert(
        "Es gab einen Fehler beim Laden der Daten. Bitte versuchen Sie es später erneut."
      );
      console.error("There was an error loading the Data:", e);
    });
}
