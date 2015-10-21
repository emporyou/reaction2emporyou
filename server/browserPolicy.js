Meteor.startup(function() {
  BrowserPolicy.content.allowEval();
  return BrowserPolicy.content.allowOriginForAll("http://emporyoum.com");
  return BrowserPolicy.content.allowOriginForAll("http://emporyoum.com");
});
