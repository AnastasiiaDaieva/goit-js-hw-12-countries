import Notiflix from 'notiflix';
import refs from './refs';
import handleArray from './handleArray';
import generateSingle from './generateSingle';

const { singleItem } = refs;

export default function manageSearch(data) {
  if (data.length > 2 && data.length < 11) {
    handleArray(data);
  } else if (data.length === 1) {
    let result = generateSingle(data);
    singleItem.insertAdjacentHTML('beforeend', result);
  } else if (data.length > 11) {
    Notiflix.Notify.info('Too many matches found! Please enter a more specific query.');
  } else {
    return;
  }
}
