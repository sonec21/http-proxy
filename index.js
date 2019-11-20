var httpProxy = require('http-proxy');

httpProxy.createProxyServer({
  target: 'https://stage.api.freedomforever.com',
  https: true,
  secure: false,
  headers: {
    host: 'api.freedomforever.com'
  }
}).listen(8012);

console.log('listening on port: 8012')
