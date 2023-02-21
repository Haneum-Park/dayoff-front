// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.NODE_ENV !== 'production' ? process.env.PORT || 8080 : 80;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
