const request = require('request');

/* const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
    let breedToReturn;
    if (!error) {
      const breedInfo = JSON.parse(body);
      for (let catObject of breedInfo) {
        if (catObject.name === breedName) {
          breedToReturn = catObject.description;
        }
      }
    }
    callback(error, breedToReturn);
  });
}; */

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let breedToReturn;
    if (!error) {
      const breedInfo = JSON.parse(body);
      if (breedInfo[0] !== undefined) {
      breedToReturn = breedInfo[0].description;
      } else {
        error = "404, breed not found";
      }
    }
    callback(error, breedToReturn);
  });
};

module.exports = {
  fetchBreedDescription
};