function simulateAsyncOperation(data, name) {
    return new Promise(function(resolve, reject) {
        var delay = Math.floor(Math.random() * 1500) + 500;
        setTimeout(function() {
            var success = Math.random() > 0.3;
            if (success) {
                console.log(name + " data loaded successfully.");
                resolve(data);
            } else {
                console.error("Failed to load " + name + " data.");
                reject(new Error(name + " data failed."));
            }
        }, delay);
    });
}

function getPlanetData() {
    var data = { name: "Saturn", size: "116,460 km", distance: "1.4 billion km" };
    return simulateAsyncOperation(data, "Planet");
}

function getSatelliteData() {
    var data = { moons: 83 };
    return simulateAsyncOperation(data, "Satellite");
}

function getExplorationData() {
    var data = { missions: ["Cassini", "Pioneer 11", "Voyager 1", "Voyager 2"] };
    return simulateAsyncOperation(data, "Exploration");
}

var planetPromise = getPlanetData().then(function(data) {
    return data;
}).catch(function(err) {
    return err;
});

var satellitePromise = getSatelliteData().then(function(data) {
    return data;
}).catch(function(err) {
    return err;
});

var explorationPromise = getExplorationData().then(function(data) {
    return data;
}).catch(function(err) {
    return err;
});

Promise.all([planetPromise, satellitePromise, explorationPromise])
    .then(function(results) {
        var hasError = results.some(function(result) {
            return result instanceof Error;
        });

        if (hasError) {
            console.log("One or more data sources failed.");
            for (var i = 0; i < results.length; i++) {
                if (results[i] instanceof Error) {
                    var sourceName = ["Planet", "Satellite", "Exploration"][i];
                    console.error(sourceName + " data error: " + results[i].message);
                }
            }
        } else {
            var planet = results[0];
            var satellite = results[1];
            var exploration = results[2];

            var report = {};
            for (var key in planet) report[key] = planet[key];
            for (var key in satellite) report[key] = satellite[key];
            for (var key in exploration) report[key] = exploration[key];

            console.log("Planet Report:");
            console.log(report);
        }
    });
