console.log ("inside of routes.js");

const Shelters = require("../controllers/shelters");
const Pets = require("../controllers/pets");

module.exports = function(app){
    app.get("/pets", Shelters.getAll);
    app.get("/pet/:id", Shelters.getId);
    app.post("/pet", Shelters.create);
    app.put('/pet/:id', Shelters.update);
    app.delete('/pet/:id', Shelters.delete);
}

// console.log ("inside of routes.js");

// const Foodtrucks = require("../controllers/foodtrucks");
// const Reviews = require("../controllers/reviews");

// module.exports = function(app){
//     app.get("/foodtrucks", Foodtrucks.getAll);
//     app.get("/foodtruck/:id", Foodtrucks.getId);
//     app.post("/foodtruck", Foodtrucks.create);
//     app.post('/foodtruck/:id/review', Reviews.addReview);

//     app.delete('/foodtruck/:id', Foodtrucks.delete);
// }
