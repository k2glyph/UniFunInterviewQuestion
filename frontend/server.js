const path = require('path');
// const http = require("http");
const Express = require('express');

const compression = require('compression');//eslint-disable-line
const staticGzip =  require('http-static-gzip-regexp')

const app = new Express();
// const server = new Server(app);

//Add the middleware express way:
// app.use(staticGzip(/(\.html|\.js|\.css)$/));

app.use(compression());
app.use(Express.static(path.join(__dirname, 'build')));


app.get('*', (req, res) => {
  res.header('Cache-Control', 'public, max-age=120');
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

// start the server
const port = process.env.PORT || 8050;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
