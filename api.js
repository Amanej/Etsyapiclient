var etsyjs = require('etsy-js');
var client = etsyjs.client({
  key: '7w9x3xs3iz0ay80ul8ur1vjv',
  secret: 'ig3zc81yh6',
  callbackURL: 'http://localhost:3000/authorise'
});

client.get('/shops',{}, function(err,status,body,headers) {
  console.log(body);
  console.dir(body);
});
