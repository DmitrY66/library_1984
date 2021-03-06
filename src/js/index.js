import {initRouter} from './modules/router.js';
import './modules/search.js';
import changeFieldset from './modules/changeFieldset.js';
import {controlField} from './modules/controlField.js';
import './modules/upload.js';
// import {renderListBooks} from './modules/renderListBooks.js';

const fieldsBtnSort = document.querySelector('.fields__btn-sort');
const fieldsListSort = document.querySelector('.fields__list_sort');
const fieldsBtnFilter = document.querySelector('.fields__btn-filter');
const fieldsListFilter = document.querySelector('.fields__list_filter');

const init = () => {

  initRouter();

  // renderListBooks();

  controlField(fieldsBtnSort, fieldsListSort, fieldsListFilter);
  controlField(fieldsBtnFilter, fieldsListFilter, fieldsListSort);

  changeFieldset();

}

init();













