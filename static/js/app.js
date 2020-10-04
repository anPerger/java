// Get a reference to the table body

const tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(ufoSighting => console.log(ufoSighting));

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
function loadData(data) {

  tbody.selectAll("*").remove()
  data.forEach(ufoSighting => {
    console.log(ufoSighting);
    const row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {
      // Append a cell to the row for each value
      // in the weather report object
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
  console.log("weeeee", filteredData);
  loadData(filteredData);
});


