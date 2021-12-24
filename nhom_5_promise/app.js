const axios = require("axios").default;
const API_DOMAIN = "https://swapi.dev/api";
const PEOPLE_API_ROUTE = "people";
const FILM_API_ROUTE = "films";

function getData() {
  const personDetailPromise = getPeople("1");
  personDetailPromise
    .then((peopleData) => {
      return getFilms(peopleData.data);
    })
    .then(({ peopleData, films }) => {
      const filterFilms = films.filter((film) => {
        return peopleData.films.includes(film.url);
      });

      const formattedFilms = filterFilms.map((film) => film.title);
      return { ...peopleData, films: formattedFilms };
    })
    .then((peopleData) => {
      console.log({ peopleData });
    });
}

function getPeople(peopleId) {
  const apiEndpoint = `${API_DOMAIN}/${PEOPLE_API_ROUTE}/${peopleId}`;
  return axios.get(apiEndpoint);
}

function getFilms(peopleData) {
  return axios.get(`${API_DOMAIN}/${FILM_API_ROUTE}`).then((films) => {
    return {
      peopleData,
      films: films.data ? films.data.results : [],
    };
  });
}

getData();
