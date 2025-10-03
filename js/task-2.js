const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

//* Функція для створення карточки createGalleryCard(cardInfo)
const creatImgCard =  imageInfo => {
  return `
  <li class="gallery-item js-gallery-item">
    <a href="#">
      <img src="${imageInfo.url}" alt="${imageInfo.alt}">
    </a>
  </li>
  `;
};

//* Створення масиву рядків із елементами
const galleryCardsTemplate = images.map(img => creatImgCard(img)).join('');

console.log(galleryCardsTemplate);

//* Вставка елементів на сторінку (innerHTML/insertAdjacentHTML)
const galleryListEl = document.querySelector('.gallery');

// galleryListEl.innerHTML = galleryCardsTemplate;
galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);