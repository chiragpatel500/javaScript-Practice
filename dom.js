// Dom Exercises.

// Exercise 1

// Now let's add content to an HTML document instead of writing to the console. Write a function called addBands myBandList) that will list your favorite bands. Start with an empty HTML page that contains a level 1 heading "My Favorite Bands" and an empty unordered list with ID band-list.
// Your function should use the JavaScript DOM to create list items and add them to the unordered list, with one list item for each string in array myBandList.
// For example, if I call: addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
// The function will add three list items to the unordered list.

// // array
// let myBandList = ['Dire Straits', 'Kansas', 'Steely Dan'];
// // select the dom elemnt to be manipulated
// var newlist = document.getElementById("band-list");

// // function
// function addBands(array) {    
//     // for loop to loop through
//     for (let i = 0; i < array.length; i ++) {
//         //creating a new list element  using HTML LI TAG and assinging it to variable called ulLIST
//         var ulList = document.createElement("li");
//         // assigning newlyCreated list to an array
//         ulList.innerHTML = array[i]
//         // adding newly Created list array to the selected domelement 
//         newlist.appendChild(ulList)
//     }
//     console.log(addBands);
// };

// // calling the function
// addBands(myBandList);


// Exercise 2
// Write a function called addMultTable(rows, cols) that will create a multiplication table like this. Start with an empty HTML page that only contains a level 1 heading.
// Your function should use the JavaScript DOM to insert an HTML table after the heading.
// For example, if I call:// addMultTable(4, 8);
// It will create an HTML table with 4 rows and 8 columns, 
// and append it after the level 1 heading.

// // writing the function
// function addMultTable(rows, col) {
//     //   Creating a new table with html TABLE tag. 
//     var tab = document.createElement("TABLE");

// //   for loop to create multiple rows and colums.
//     for (let i = 0; i < rows; i++) {
//     //  inserting row to the table
//         var row = tab.insertRow(0);
//         // inserting colums multiple cells using  for loop
//       for (let i = 0; i < col; i++) {
//         //  inserting column cell
//           newCell = row.insertCell(0);
//       }
//   }
// //  append it after the level 1 heading.
// document.body.appendChild(tab);

// console.log(addMultTable);
// }
// // Calling the function
// addMultTable(4, 8);


