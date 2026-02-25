function insert_Row() {
  var table = document.getElementById("sampleTable");

  // Insert row at top
  var row = table.insertRow(0);

  // Insert cells
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  // Add content
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}