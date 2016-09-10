var settings = require('settings.json');
var etsyjs = require('etsy-js');
/*var client = etsyjs.client({
  key: settings.key,
  secret: settings,
  callbackURL: 'http://localhost:3000/authorise'
});*/
var client = etsyjs.client(settings.key);

client.get('/shops',{}, function(err,status,body,headers) {
  console.log(body);
  console.dir(body);
});
