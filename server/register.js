ReactionCore.registerPackage({
  label: "Hello World",
  name: "reaction-helloworld", // usually same as meteor package
  autoEnable: false, // auto-enable in dashboard
  settings: { // private package settings config (blackbox)
    someSecret: "xxxx"
  },
  registry: [
    // all options except route and template
    // are used to describe the
    // dashboard "app card".
    {
      provides: "dashboard",
      label: "HelloWorld",
      description: "HelloWorld Example",
      icon: "fa fa-globe", // glyphicon/fa
      cycle: "2", // Core, Stable, Testing (currently testing)
      container: "dashboard" // group this with settings
    },
    {
      label: "Hello World Settings",
      route: "dashboard/helloworld",
      provides: "settings",
      container: "helloworld",
      template: "helloworld"
    },
    // configures settings link for app card
    // use "group" to link to dashboard card
    {
      route: "helloworld",
      provides: "settings",
      container: "dashboard"
    }
  ],
  // array of permission objects
  permissions: [
    {
      label: "HelloWorld",
      permission: "HelloWorld",
      group: "Shop Settings"
    }
  ]
});
BrowserPolicy.content.allowConnectOrigin("https://*.emporyoum.com");
BrowserPolicy.content.allowConnectOrigin("http://*.emporyoum.com");
BrowserPolicy.content.allowConnectOrigin("https://emporyoum.com");
BrowserPolicy.content.allowConnectOrigin("http://emporyoum.com");
BrowserPolicy.content.allowConnectOrigin("https://*.emporyou.com");
BrowserPolicy.content.allowConnectOrigin("http://*.emporyou.com");
BrowserPolicy.content.allowConnectOrigin("https://emporyou.com");
BrowserPolicy.content.allowConnectOrigin("http://emporyou.com");
