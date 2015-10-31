Meteor.startup(function() {
  var b=BrowserPolicy;
  if(!b)=browserPolicy;
  if(b){
b.content.allowEval();
B.content.allowOriginForAll("http://emporyou.com");
b.content.allowOriginForAll("http://*.emporyou.com");
  return b.content.allowOriginForAll("http://emporyoum.com");
}});
