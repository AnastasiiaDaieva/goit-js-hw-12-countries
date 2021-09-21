import refs from './refs';
import listOfItems from '../templates/listOfItems.hbs';

const { accessUl } = refs;

export default function handleArray(data) {
  console.log(data);

  data.map(item => {
    let result = listOfItems(item);
    accessUl.insertAdjacentHTML('beforeend', result);
  });
}
