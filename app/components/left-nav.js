import Ember from 'ember';


export default Ember.Component.extend({

  tagName: 'li',
  // tagName: 'div',

  /**
   * @property classNames
   * @type {String}
   */
  // classNames: 'files',
  // toggleUntouched: true,
  classNameBindings: ['subMenu', 'active', 'toggled'],
  toggled: function(){
    // $(".prop-sub-menu").show();
    // return false;
    // if (this.get("tab.tabRoute") === "admin.propiedades") {
    //   // debugger;
    //   $(".prop-sub-menu").show();
    //   return this.get("tab.tabRoute") === this.get("activeTabRoute");
    // } else{
    //   return true;
    // }

    // Toggled true will set +/- to -
    // as I'm forcing submenu to display block by default
    // (hardcoded in hbs file)
    // will return as true whenever I have submenuitems
    return !!this.get("tab.subMenuItems");
    // return  (this.get("tab.tabRoute") === "admin.propiedades");
  }.property("activeTabRoute"),
  active: function(){
    return this.get("tab.tabRoute") === this.get("activeTabRoute");
  }.property("activeTabRoute"),
  subMenu: function(){
    // june 2016 - just adds some styles for submenu
    // return this.get("tab.tabRoute") === "admin.website";
    return !!this.get("tab.subMenuItems");
  }.property(),


});
