import Ember from 'ember';


export default Ember.Component.extend({

  tagName: 'li',
  // tagName: 'div',

  /**
   * @property classNames
   * @type {String}
   */
  // classNames: 'files',
  toggleUntouched: true,
  classNameBindings: ['subMenu', 'active', 'toggled'],
  toggled: function(){
    if (this.get("tab.tabRoute") === "admin.propiedades") {
      // debugger;
      $(".prop-sub-menu").show();
      return this.get("tab.tabRoute") === this.get("activeTabRoute");
    } else{
      return false;
    }
    // return this.get("tab.tabRoute") === this.get("activeTabRoute") || (this.get("tab.tabRoute") === "admin.propiedades");
  }.property("activeTabRoute"),
  active: function(){
    return this.get("tab.tabRoute") === this.get("activeTabRoute");
  }.property("activeTabRoute"),
  subMenu: function(){
    return this.get("tab.tabRoute") === "admin.propiedades";
  }.property(),
  subMenuItems: [{
        tabIconClass: "fa fa-list",
        tabTitleKey: "adminSections.list",
        tabRoute: "admin.propiedades.list.visible"
          // tabRoute: "admin.inicio"
      }, {
        tabIconClass: "fa fa-gears",
        tabTitleKey: "adminSections.settings",
        tabRoute: "admin.propiedades.settings"
      }]

});
