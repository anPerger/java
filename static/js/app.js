// Get a reference to the table body
const tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(ufoSighting => console.log(ufoSighting));

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(ufoSighting => {
  console.log(ufoSighting);
  let row = tbody.append("tr");
});

// // // Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(ufoSighting => {
  let row = tbody.append("tr");
  console.log(Object.values(ufoSighting))
  console.log(Object.entries(ufoSighting))
});

// // // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(ufoSighting => {
//   let row = tbody.append("tr");
//   Object.values(ufoSighting).forEach(value => {
//     console.log(value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     let cell = row.append("td");
//   });
// });

// // // Step 5: Use d3 to update each cell's text with
// // // weather report values (weekday, date, high, low)
data.forEach(ufoSighting => {
  let row = tbody.append("tr");
  Object.values(ufoSighting).forEach(value => {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// // // BONUS: Refactor to use Arrow Functions!
// // data.forEach((ufoSighting) => {
// //   let row = tbody.append("tr");
// //   Object.values(ufoSighting).forEach(value => {
// //     let cell = row.append("td");
// //     cell.text(value);
// //   });
// // });
