import refs from './refs';
import singleItemTemplate from '../templates/singleItem.hbs';
const { accessUl } = refs;

export default function generateSingle(data) {
  accessUl.innerHTML = '';
  return data.map(elem => {
    const newElem = singleItemTemplate(elem);
    return newElem;
  });
}
