import refs from './refs.js';
import { debounce } from 'lodash';
import fetchCountries from './fetchCountries.js';

const { accessInput, singleItem } = refs;

const BASE_URL = 'https://restcountries.eu/rest/v2';
const endPoint = '/name';

function assignValue(e) {
  singleItem.innerHTML = '';
  let value = `/${e.target.value}`;
  let query = BASE_URL + endPoint + value;
  fetchCountries(query);
}

function getValue() {
  accessInput.addEventListener('input', debounce(assignValue, 500));
}

getValue();
