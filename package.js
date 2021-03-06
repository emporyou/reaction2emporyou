Package.describe({
  summary: "Emporyou connector for Reaction",
  name: "emporyou:reaction2emporyou",
  version: "0.4.0",
  git: "https://github.com/emporyou/reaction2emporyou.git"
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
  api.addFiles("server/browserPolicy.js"); // set browser policy to allow emporyou.com


  api.addFiles([
    "client/templates/reaction2emporyou/reaction2emporyou.html",
    "client/templates/reaction2emporyou/reaction2emporyou.js",
    "client/templates/reaction2emporyou/reaction2emporyou.less",

    "client/templates/dashboard/widget/widget.html",
    "client/templates/dashboard/widget/widget.js",
    "client/templates/dashboard/widget/widget.less"
  ], ["client"]);
});
