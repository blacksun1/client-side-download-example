function csvSample(data) {
  var stringify = require('csv-stringify');

  stringify(data, function(err, output) {
    if (err) {
      return console.log("Stringify didn't work.", err);
    }
    console.log(output);
  });
}

function generateBlobContent() {
  return {
    "blob": [csvSample(simpleTableScrape(document.getElementById("myTable")))],
    "type": "application/vnd.ms-excel"
  };
}

module.exports = generateBlobContent;
