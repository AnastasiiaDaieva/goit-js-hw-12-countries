import refs from './refs';

const { accessUl } = refs;

export default function handleArray(data) {
  console.log(data);

  data.map(item => {
    const { name } = item;
    let result = `<li class="results__item">${name}</li>`;
    accessUl.insertAdjacentHTML('beforeend', result);
  });
}
