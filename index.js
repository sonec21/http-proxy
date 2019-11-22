var httpProxy = require('http-proxy');

httpProxy.createProxyServer({
  target: 'https://stage.api.freedomforever.com',
  https: true,
  secure: false,
  headers: {
    host: 'api.freedomforever.com'
  }
}).listen(8013);

console.log('running on port: 8013')
