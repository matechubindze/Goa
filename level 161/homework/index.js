db.cars.find({ year: { $gt: 2015 } }).explain("executionStats");

db.cars.find({ brand: "Toyota" }).explain("executionStats");

db.cars.createIndex({ year: 1 });

db.cars.find({ year: { $gt: 2015 } }).explain("executionStats");

db.cars.createIndex({ brand: 1, year: 1 });

db.cars.find({
    brand: "Toyota",
    year: { $gt: 2015 }
}).explain("executionStats");

