// from data.js
var ufoData = data;

// Assigning button to a variable
var button = d3.select('#button');

//Make the button a functioning variable
button.on("click", function() {

    //Assign the input html id to a variable and the getting only its value property
    var dateElement = d3.select('#data-filter');
    var dateValue = dateElement.property("value");

    //Check work so far
    //console.log(dataValue);
    //console.log(ufoData);

    //filter data by date inserted by user
    var filteredData = ufoData.filter(ufo => ufo.datetime === dateValue);

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