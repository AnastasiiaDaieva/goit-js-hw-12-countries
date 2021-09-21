import refs from './refs';
import manageSearch from './manageSearch';

const { accessUl } = refs;

export default function fetchCountries(searchQuery) {
  return (
    fetch(searchQuery)
      .then(response => {
        if (response.ok) return response.json();
      })
      // .then(data => manageSearch(data))
      .catch(err => alert(err))
  );
  // .finally((accessUl.innerHTML = ''));
}
