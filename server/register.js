ReactionCore.registerPackage({
  label: "reaction2emporyou",
  name: "reaction2emporyou", // usually same as meteor package
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
      label: "reaction2emporyou",
      description: "Emporyou Connector",
      icon: "fa fa-globe", // glyphicon/fa
      cycle: "2", // Core, Stable, Testing (currently testing)
      container: "dashboard" // group this with settings
    },
    {
      label: "Emporyou Connector Settings",
      route: "dashboard/reaction2emporyou",
      provides: "settings",
      container: "reaction2emporyou",
      template: "reaction2emporyou"
    },
    // configures settings link for app card
    // use "group" to link to dashboard card
    {
      route: "reaction2emporyou",
      provides: "settings",
      container: "dashboard"
    }
  ],
  // array of permission objects
  permissions: [
    {
      label: "reaction2emporyou",
      permission: "reaction2emporyou",
      group: "Shop Settings"
    }
  ]
});
