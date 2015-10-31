Meteor.startup(function() {
  var b=BrowserPolicy;
if(!b){b=browserPolicy;}
  if(b){
b.content.allowEval();
b.content.allowOriginForAll("http://emporyou.com");
b.content.allowOriginForAll("http://*.emporyou.com");
  return b.content.allowOriginForAll("http://emporyoum.com");
}});
