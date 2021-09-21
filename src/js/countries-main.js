import refs from './refs.js';
import { debounce } from 'lodash';
import fetchCountries from './fetchCountries.js';
import manageSearch from './manageSearch.js';

const { accessInput, accessUl, singleItem } = refs;

function assignValue(e) {
  singleItem.innerHTML = '';
  let query = e.target.value.trim();
  fetchCountries(query).then(data => manageSearch(data));
  accessUl.innerHTML = '';
}

function getValue() {
  accessInput.addEventListener('input', debounce(assignValue, 500));
}

getValue();
