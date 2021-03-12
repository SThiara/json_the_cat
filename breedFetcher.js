const request = require('request');
const breedReq = process.argv[2];

request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
  if (error) {
    console.error(error);
  }
  if (!error) {
    const breedInfo = JSON.parse(body);
    for (let catObject of breedInfo) {
      if (catObject.name === breedReq) {
        return console.log(catObject.description);
      }
    }
    return console.log("no neko");
  }
});