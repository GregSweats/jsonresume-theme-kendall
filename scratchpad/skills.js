

let converter = require('json-2-csv');

const fs = require('fs');
let skills = fs.readFileSync('./skills.json');
skills = JSON.parse(skills);

// console.log(skills)





const xlsxFile = require('read-excel-file/node');

xlsxFile('./skills.xlsx').then((rows) => {

  console.log(rows);

  converter.json2csv(skills, json2csvCallback);

});


let json2csvCallback = function(err, csv) {
  if (err) throw err;

  console.log(csv)
}


