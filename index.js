const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/test.html');
}); 
*/
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ict",
  password: "b2191560",
  port: 5432,
});

// ①カウントで、e101に指定して何人いるか持ってくる
// res.sendに入れて、boxに持ってく
const query = {
    text: "select count(room ='E101' and state ='入室中' or null) as E101, count(room ='E102' and state ='入室中' or null) as E102, count(room ='E103' and state ='入室中' or null) as E103 ," +
    "count(room ='E201' and state ='入室中' or null) as E201, count(room ='E202' and state ='入室中' or null) as E202, count(room ='E203' and state ='入室中' or null) as E203 ," +
    "count(room ='E301' and state ='入室中' or null) as E301, count(room ='E302' and state ='入室中' or null) as E302, count(room ='E303' and state ='入室中' or null) as E303 " +
    " from status" 
  };

// Fetch API設定
const jsonParser = bodyParser.json();
 
app.post('/fetch', jsonParser,  (req, res) => {
    //console.log(req.body);
    //const ikku = req.body.ikku;
    //console.log('ikku->' + ikku);
    
    pool
    .query(query)
    .then((result) => {
      const resdata = result.rows[0];
      console.log(typeof(resdata));
      console.log(resdata);
  
      const reslist = [resdata.e101,resdata.e102,resdata.e103,resdata.e201,resdata.e202,resdata.e203,resdata.e301,resdata.e302,resdata.e303];
      console.log(typeof(reslist))
      console.log(reslist);
      res.send(reslist);
    // client.end();
    })
    .catch((e) => console.error(e.stack));

});

app.listen(3000, () => {
    console.log('Start server port:3000');
});
