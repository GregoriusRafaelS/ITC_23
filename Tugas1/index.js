const http = require('http');
const url = require('url');
const routes = require('./routes');

const server = http.createServer((req,res)=>{
  //mengekstrak url dari request
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  routes(req.method, pathname, res);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/`);
});
