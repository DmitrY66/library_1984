import {getLabels, getBooks, API_URI} from './serviceBook.js';

const bookContainer = document.querySelector('.book__container');


const getStars = (rating) => {

  const stars = [];
  for (let i = 0; i < 5; i++) {

    if (i === 0) {
      stars.push(`<img class="book__rating-star" src="img/star.svg" alt="Рейтинг ${rating} из 5">`);
    } else if (i < rating) {
      stars.push(`<img class="book__rating-star" src="img/star.svg" alt="">`);
    } else {
      stars.push(`<img class="book__rating-star" src="img/star-o.svg" alt="">`);
    }

  }

  return stars.join(' ');

};


export const renderBook = async (id) => {

  const [books, labels] = await Promise.all([getBooks(id), getLabels()]);

  bookContainer.innerHTML = `
    <div class="book__wrapper">
      <img class="book__mage" src="${API_URI}${books.image}" alt=Обложка книги ${books.title}">
      <button class="book__wrapper-label">${labels[books.label]}</button>
    </div>

    <div class="book__content">

      <h2 class="book__title">${books.title}</h2>
      <p class="book__author">${books.author}</p>

      <div class="book__rating">
<!--        <img class="book__rating-star" src="img/star.svg" alt="Рейтинг 5 из 5">-->
<!--        <img class="book__rating-star" src="img/star.svg" alt="">-->
<!--        <img class="book__rating-star" src="img/star.svg" alt="">-->
<!--        <img class="book__rating-star" src="img/star.svg" alt="">-->
<!--        <img class="book__rating-star" src="img/star.svg" alt="">-->
        ${getStars(books.rating)}
      </div>

      <h3 class="book__subtitle">Описание</h3>
      <p class="book__description">${books.description.substring(0, 80)}...</p>

    </div>
  `;

}
