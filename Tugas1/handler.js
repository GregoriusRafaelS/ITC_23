const users = require('./dataUsers');

const getHomeHandler = (res) => {
  try {
    res.setHeader('Content-Type', 'html');
                
    res.writeHead(200);             
    res.end('<h1>Halo<h1>\n');
  } catch (e) {
    res.end(e.message);
  }
};

const getUsersHandler = (res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
              
    res.writeHead(200);             
    res.end(JSON.stringify(users));
  } catch (e) {
    res.end(e.message);
  }
};

const getNotFoundHandler = (res) => {
  res.setHeader('Content-Type', 'application/json');
            
  res.writeHead(404);             
  res.end(JSON.stringify({
      status: 'Not Found!!!',
      message: 'Resource Not Found'
  }));
};

const methodNotAllowedHandler = (res) => {
  res.setHeader('Content-Type', 'application/json');
        
  res.writeHead(405);             
  res.end(JSON.stringify({
      status: 'Tidak Diizinkan!!!',
      message: 'Metode HTTP tidak diizinkan.\n'
  }));
};

module.exports = {
  getHomeHandler,
  getUsersHandler,
  getNotFoundHandler,
  methodNotAllowedHandler,
} 