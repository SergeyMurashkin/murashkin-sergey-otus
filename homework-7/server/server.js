const express = require('express');
const path = require ('path');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  //res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

app.use('/assets/', express.static(`${__dirname}/../dist`));

app.listen(port);

console.log('Running at Port ' + port);