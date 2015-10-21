Meteor.startup(function() {
  BrowserPolicy.content.allowEval();
  BrowserPolicy.content.allowOriginForAll("http://emporyou.com");
  BrowserPolicy.content.allowOriginForAll("http://*.emporyou.com");
  return BrowserPolicy.content.allowOriginForAll("http://emporyoum.com");
});
