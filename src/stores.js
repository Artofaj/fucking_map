import { writable } from "svelte/store";

export const commodities = writable(null);
export const countries = writable(null);
export const countriesWithCommodity = writable(null);
export const selectedCountry = writable(null);
export const selectedCountryData = writable(null);
