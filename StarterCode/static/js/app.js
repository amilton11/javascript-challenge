// from data.js
var tableData = data;

// YOUR CODE HERE!

function buildTable(d) {
    var tbody = d3.select("tbody");
    tbody.html('');

    for (var j = 0; j < d.length; j++) {
        var row_data = d[j]
        console.log(row_data.datetime);
        var row = tbody.append("tr");
        var celldate = row.append("td");
        celldate.text(row_data.datetime);
        var cellcity = row.append("td");
        cellcity.text(row_data.city);
        var cellstate = row.append("td");
        cellstate.text(row_data.state);
        var cellcountry = row.append("td");
        cellcountry.text(row_data.country);
        var cellshape = row.append("td");
        cellshape.text(row_data.shape);
        var celldurationMinutes = row.append("td");
        celldurationMinutes.text(row_data.durationMinutes);
        var cellcomments = row.append("td");
        cellcomments.text(row_data.comments);
        
    }
}

function handleClick(){
    console.log('youclickedit');
    var filterDate = d3.select("#datetime").property("value");
    filteredData = tableData.filter(row => row.datetime == filterDate);
    buildTable(filteredData);

}

d3.select("#filter-btn").on("click", handleClick);
buildTable(tableData);




