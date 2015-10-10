Package.describe({
  summary: "Reaction Hello World - example package for Reaction",
  name: "reactioncommerce:reaction-helloworld",
  version: "0.4.0",
  git: "https://github.com/ongoworks/reaction-helloworld.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.2");

  // meteor base packages
  api.use("standard-minifiers");
  api.use("mobile-experience");
  api.use("meteor-base");
  api.use("mongo");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("jquery");
  api.use("tracker");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use("spacebars");
  api.use("check");
  api.use("ecmascript");
  api.use("less");

  api.use("reactioncommerce:core@0.9.0");

  api.addFiles("server/register.js", ["server"]); // register as a reaction package

  api.addFiles("common/routing.js", ["client", "server"]); // common routing

  api.addFiles([
    "client/templates/helloworld/helloworld.html",
    "client/templates/helloworld/helloworld.js",
    "client/templates/helloworld/helloworld.less",

    "client/templates/dashboard/widget/widget.html",
    "client/templates/dashboard/widget/widget.js",
    "client/templates/dashboard/widget/widget.less"
  ], ["client"]);
});
