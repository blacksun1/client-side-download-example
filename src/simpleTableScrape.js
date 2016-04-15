function simpleTableScrape(table) {
  var data = [], rowData;
  var rows, rowIndex, rowCount;
  var cells, cellIndex, cellCount;

  rows = table.getElementsByTagName("tr");
  for (rowIndex = 0, rowCount = rows.length; rowIndex < rowCount; rowIndex += 1) {
    rowData = [];
    cells = rows[rowIndex].getElementsByTagName("th");
    for (cellIndex = 0, cellCount = cells.length; cellIndex < cellCount; cellIndex += 1) {
      rowData.push(cells[cellIndex].textContent);
    }
    cells = rows[rowIndex].getElementsByTagName("td");
    for (cellIndex = 0, cellCount = cells.length; cellIndex < cellCount; cellIndex += 1) {
      rowData.push(cells[cellIndex].textContent);
    }
    data.push(rowData);
  }
  return data;
}

module.exports = simpleTableScrape;
