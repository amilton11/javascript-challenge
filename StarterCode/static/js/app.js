// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

for (var j = 0; j < tableData.length; j++) {
    var row_data = tableData[j]
    console.log(row_data.datetime);
    var row = tbody.append("tr");
    var cell = row.append("td");
    cell.text(row_data.datetime);  
}


  

