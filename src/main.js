(function() {
  var simpleTableScrape = require("./simpleTableScrape");
  var generateBlobContent = require("./generateBlobContent");

  function csvExport(data) {
    var stringify = require('csv-stringify');
    var options = {
      "rowDelimiter": "windows"
    };

    stringify(data, options, function(err, output) {
      if (err) {
        return console.log("Stringify didn't work.", err);
      }
      var link = document.createElement('a');
      link.className = "likeabutton";
      link.type = "application/vnd.ms-excel";
      link.innerHTML = "Download CSV";
      createDownloadLink(link, [output], "tableexport.csv", "application/vnd.ms-excel");
      document.body.appendChild(link);
    });
  }

  var myTable = document.getElementById("myTable")

  function createDownloadLink(anchorObject, str, fileName, type){
    // if(window.navigator.msSaveOrOpenBlob) {
    //   var fileData = str;
    //   blobObject = new Blob(fileData);
    //   anchorObject.addEventListener("click", function(){
    //     window.navigator.msSaveOrOpenBlob(blobObject, fileName);
    //   });
    // } else {
      // var url = "data:" + type + ";charset=utf-8," + encodeURIComponent(str);
      // console.log(url);
      var fileData = str;
      blobObject = new Blob([fileData], { "type": type });
      url = URL.createObjectURL(blobObject);
      anchorObject.download = fileName;
      anchorObject.href = url;
    // }
  }

  var tableData = simpleTableScrape(document.getElementById("myTable"));
  csvExport(tableData);
}());
