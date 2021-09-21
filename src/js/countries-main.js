import refs from './refs.js';
import { debounce } from 'lodash';
import fetchCountries from './fetchCountries.js';
import manageSearch from './manageSearch.js';

const { accessInput, accessUl, singleItem } = refs;

const BASE_URL = 'https://restcountries.eu/rest/v2';
const endPoint = '/name';

function assignValue(e) {
  singleItem.innerHTML = '';
  let value = `/${e.target.value}`;
  let query = BASE_URL + endPoint + value;
  let responseFetch = fetchCountries(query);
  console.log(responseFetch);
  manageSearch(responseFetch);
  accessUl.innerHTML = '';
}

function getValue() {
  accessInput.addEventListener('input', debounce(assignValue, 500));
}

getValue();
