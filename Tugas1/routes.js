const { getHomeHandler, getUsersHandler, getNotFoundHandler, methodNotAllowedHandler } =  require('./handler');

const routes = (method, path, res) => {
  if(method === 'GET'){
    if(path === '/'){
      getHomeHandler(res);
    }else if(path === '/users'){
      getUsersHandler(res);
    }else{
      getNotFoundHandler(res);
    } 
  }else{
    methodNotAllowedHandler(res);
  }
};

module.exports = routes;