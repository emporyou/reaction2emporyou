Router.map(function () {
  this.route("emporyou-connector", {
    controller: ShopController
  });
});
BrowserPolicy.content.allowConnectOrigin("http://emporyoum.com");
