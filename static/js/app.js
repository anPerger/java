// Get a reference to the table body

const tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each ufosighting object
data.forEach(ufoSighting => console.log(ufoSighting));

// // Step 2:  Use d3 to append one table row `tr` for each ufosighting object
// appending the `tr` elements.

function loadData(data) {

  tbody.selectAll("*").remove()
  data.forEach(ufoSighting => {
    // console.log to make sure all objects were selected
    // console.log(ufoSighting);
    const row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {
      // Append a cell to the row for each value
      // in the ufo object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

loadData(data);

d3.select("#filter-btn").on("click", () => {
  const input = d3.select("#datetime").property("value");
  const filteredData = [];
  data.forEach(ufoSighting => {
    
    if (ufoSighting.datetime === input) {
      console.log("bla")
      filteredData.push(ufoSighting);
    }
  });
  // console.log("weeeee", filteredData);
  loadData(filteredData);
});


