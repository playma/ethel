var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data/ethel.db');

db.serialize(function() {
  // cost, eyeRange, earRange, noseRange, mouthRange, heightRange, kid, faceaa, facebb, facecc
  var create_table_form1 = "CREATE TABLE form1 ( \
    cost integer, \
    eyeRange integer, \
    earRange integer, \
    noseRange integer, \
    mouthRange integer, \
    heightRange integer, \
    kid string, \
    height integer, \
    faceaa integer, \
    facebb integer, \
    facecc integer \
   );"

  db.run(create_table_form1);
});

db.close();