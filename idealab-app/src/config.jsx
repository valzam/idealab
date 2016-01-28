const getJwt = function(){
  return sessionStorage.getItem('jwt') || localStorage.getItem('jwt');
};

export default {
  "API":process.env.API || 'http://localhost:3000/api/v1',
  "JWT":getJwt
};
