const axios = require('axios');

let promise1 = axios
    .get('https://swapi.dev/api/people/1')
    .then(response => {
      const dataPeople = response.data;
      response.data.films.forEach((film, index) => {
        axios
        .get(film)
        .then(response => {
          filmTitles.push(response.data.title)
          dataPeople.films = filmTitles;
        })
        .catch(error => {
          console.error(error)
        })
      })
      response.data.vehicles.forEach((vehicle, index) => {
        axios
        .get(vehicle)
        .then(response => {
          vehicleNames.push(response.data.name)
          dataPeople.vehicles = vehicleNames;
        })
        .catch(error => {
          console.error(error)
        })
      })
      response.data.starships.forEach((starship) => {
        axios
        .get(starship)
        .then(response => {
          starshipNames.push(response.data.name);
          dataPeople.starships = starshipNames;
        })
        .catch(error => {
          console.error(error)
        })
      })
      setTimeout(function (){
        console.log(dataPeople);
      }, 1000)
    })
    .catch(error => {
      console.error(error)
    })
    

    

let filmTitles = [];
let vehicleNames = [];
let starshipNames = [];
    