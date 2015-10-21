ReactionCore.registerPackage({
  label: "emporyou connector",
  name: "emporyou-connector", // usually same as meteor package
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
      label: "emporyou-connector",
      description: "Emporyou Connector",
      icon: "fa fa-globe", // glyphicon/fa
      cycle: "2", // Core, Stable, Testing (currently testing)
      container: "dashboard" // group this with settings
    },
    {
      label: "Emporyou Connector Settings",
      route: "dashboard/emporyou-connector",
      provides: "settings",
      container: "emporyou-connector",
      template: "emporyou-connector"
    },
    // configures settings link for app card
    // use "group" to link to dashboard card
    {
      route: "emporyou-connector",
      provides: "settings",
      container: "dashboard"
    }
  ],
  // array of permission objects
  permissions: [
    {
      label: "emporyou-connector",
      permission: "emporyou-connector",
      group: "Shop Settings"
    }
  ]
});
