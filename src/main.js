import {createProfileTemplate} from "./view/profile.js";
import {createMenuTemplate} from "./view/site-menu.js";
import {createFilmsTemplate} from "./view/film-container.js";
import {createFilmTemplate} from "./view/film.js";
import {createShowMoreButtonTemplate} from "./view/load-more-button.js";
import {createExtraTemplate} from "./view/extra-container.js";

const FILM_COUNT = 5;
const TOP_RATED_COUNT = 2;
const MOST_COMMENTED_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createMenuTemplate(), `afterbegin`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);

const filmsElement = siteMainElement.querySelector(`.films`);
const listElement = filmsElement.querySelector(`.films-list`);
const listContainerElement = filmsElement.querySelector(`.films-list__container`);

for (let i = 0; i < FILM_COUNT; i++) {
  render(listContainerElement, createFilmTemplate(), `beforeend`);
}

render(listElement, createShowMoreButtonTemplate(), `beforeend`);

render(filmsElement, createExtraTemplate(`Top rated`, `top-rated`), `beforeend`);
render(filmsElement, createExtraTemplate(`Most commented`, `most-commented`), `beforeend`);

const topRatedElement = filmsElement.querySelector(`.films-list--top-rated > .films-list__container`);
const mostCommentedElement = filmsElement.querySelector(`.films-list--most-commented > .films-list__container`);

for (let i = 0; i < TOP_RATED_COUNT; i++) {
  render(topRatedElement, createFilmTemplate(), `beforeend`);
}

for (let i = 0; i < MOST_COMMENTED_COUNT; i++) {
  render(mostCommentedElement, createFilmTemplate(), `beforeend`);
}
