const express = require('express');
const app = express();
const port = 80;

app.get('/', function (req, res) {
  res.send('hello world!')
});

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});