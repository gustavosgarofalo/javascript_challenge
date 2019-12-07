// from data.js
var ufoData = data;

// Assigning button to a variable
var button = d3.select('#button');

//Make the button a functioning variable
button.on("click", function() {

    //Assign the input html id to a variable and the getting only its value property
    //create a variable for each element's id and a var for each id value
    var dateElement = d3.select('#data-filter');
    var dateValue = dateElement.property("value");

    var cityElement = d3.select("#city-filter");
    var cityValue = cityElement.property("value");

    var stateElement = d3.select("#state-filter");
    var stateValue = stateElement.property("value");

    var shapeElement = d3.select("#shape-filter");
    var shapeValue = shapeElement.property("value");

    var filteredArray = [];

    //Create conditional statements that allows to use the multiple filters
    if (dateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.datetime === dateValue);
    }
    if (cityValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.city === cityValue);
    }
    if (stateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.state === stateValue);
    }
    if (shapeValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.shape === shapeValue);
    }




    //all possibilities with date
    if (cityValue !== "" && dateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.city === cityValue && ufo.datetime === dateValue);
    }
    if (stateValue !== "" && dateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.state === stateValue && ufo.datetime === dateValue);
    }
    if (shapeValue !== "" && dateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.shape === shapeValue && ufo.datetime === dateValue);
    }
    //all possibilities with city
    if (dateValue !== "" && cityValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.datetime === dateValue && ufo.city === cityValue);
    }
    if (stateValue !== "" && cityValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.state === stateValue && ufo.city === cityValue);
    }
    if (shapeValue !== "" && cityValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.shape === shapeValue && ufo.city === cityValue);
    }
    //all possibilities with state
    if (dateValue !== "" && stateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.datetime === dateValue && ufo.state === stateValue);
    }
    if (cityValue !== "" && stateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.city === cityValue && ufo.state === stateValue);
    }
    if (shapeValue !== "" && stateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.shape === shapeValue && ufo.state === stateValue);
    }
    //all possibilities with shape
    if (dateValue !== "" && shapeValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.datetime === dateValue && ufo.shape === shapeValue);
    }
    if (stateValue !== "" && shapeValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.state === stateValue && ufo.shape === shapeValue);
    }
    if (cityValue !== "" && shapeValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.city === cityValue && ufo.shape === shapeValue);
    }
    //combinations of 3
    if (cityValue !== "" && stateValue !== "" && shapeValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.city === cityValue && ufo.state === stateValue && ufo.shape === shapeValue);
    }
    if (cityValue !== "" && stateValue !== "" && dateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.city === cityValue && ufo.state === stateValue && ufo.datetime === dateValue);
    }
    if (shapeValue !== "" && cityValue !== "" && dateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.city === cityValue && ufo.datetime === dateValue && ufo.shape === shapeValue);
    }
    if (shapeValue !== "" && stateValue !== "" && dateValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.state === stateValue && ufo.datetime === dateValue && ufo.shape === shapeValue);
    }
    //All 4 not null
    if (shapeValue !== "" && stateValue !== "" && dateValue !== "" && cityValue !== "") {
        var filteredData = ufoData.filter(ufo => ufo.state === stateValue && ufo.datetime === dateValue && ufo.shape === shapeValue && ufo.city === cityValue);
    }






    // set table row to nothing before appending 
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    //Loop through each objects and append a row to the table
    filteredData.forEach(function(ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");

        //Loop through each objects returned and retrieve value for each key and render to the website
        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value in the ufo report object
            var cell = row.append("td");
            cell.text(value);
        });

    });

});