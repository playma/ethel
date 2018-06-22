var express = require('express');
var router = express.Router();
var util = require('util');

var sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./data/ethel.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('### Connected database successfully.');
});

function processForm(data) {
  try {
    var key_arr = []
    var val_arr = []
  
    for(var key in data) {
      key_arr.push(key)
      val_arr.push(data[key])
    }
    console.log(val_arr)

    key_str = key_arr.join(', ') // age, psw, gender, siblings, dna1, remember

    question_arr = Array.apply(null, Array(key_arr.length)).map(String.prototype.valueOf,"?")

    question_str = question_arr.join(', ') // ?, ?, ?, ?, ?, ?

    var insert_sql = util.format(`INSERT INTO form1(%s) VALUES(%s)`, key_str, question_str)

    db.run(insert_sql, val_arr, function(err) {
      if (err) {
        console.log(err.message);
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
  } catch (ex) {
    console.log(ex)
  }
}

router.get('/', function(req, res) {
  return res.json('hello world');
});

router.get('/result', function(req, res) {
  db.all("SELECT rowid AS id, * FROM form1", function(err, rows) {
      console.log(rows)
      head = ['id', 'cost', 'eyeRange', 'earRange', 'noseRange', 'mouthRange', 'heightRange', 'kid', 'height', 'faceaa', 'facebb', 'facecc']
      res.render('result', {data: rows, head: head});
  });
  
});

router.post('/postForm1', function(req, res, next) { 
  processForm(req.body)

  /*
  db.serialize(function() {
    db.each("SELECT rowid AS id, info FROM form1", function(err, row) {
        console.log(err)
        console.log(row.id + ": " + row.info);
    });
  });*/

  return res.status(200);
});

module.exports = router;
