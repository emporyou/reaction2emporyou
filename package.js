Package.describe({
  summary: "Reaction Hello World - example package for Reaction",
  name: "ongoworks:reaction-helloworld",
  version: "0.1.1",
  git: "https://github.com/ongoworks/reaction-helloworld.git"
});

Package.on_use(function (api, where) {
  api.use([
    "standard-app-packages",
    "coffeescript",
    "reaction-core"
  ], ["client", "server"]);
  api.use([
    "iron-router",
    "less"
  ], ["client"]);

  api.add_files([
    "common/register.coffee"
  ]);

  api.add_files([
    "client/routing.coffee",

    "client/templates/helloworld/helloworld.html",
    "client/templates/helloworld/helloworld.coffee",
    "client/templates/helloworld/helloworld.less",

    "client/templates/dashboard/widget/widget.html",
    "client/templates/dashboard/widget/widget.coffee",
    "client/templates/dashboard/widget/widget.less"
  ], ["client"]);
});
