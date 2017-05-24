import Ember from 'ember';


export default Ember.Component.extend({

  click: function(ev) {
    // attempt to fix + and - indicators on sub-menu
    // - not successfull...
    var el = ev.target.parentElement;
    if (el.classList.contains("sm-toggled")) {
      el.classList.remove("sm-toggled");
    } else {
      el.classList.add("sm-toggled");
    }
    el.setAttribute("class", el.classList.toString());
    if ($('#mobileTest').is(':visible')) {
      // device is = xs, sm or md
      // so left nav needs to get hidden after it is clicke
      $('#header').toggleClass('sidebar-toggled');
      $('#menu-trigger').toggleClass('open');
      $('#sidebar').toggleClass('toggled');
    }
    // else {
    //   // device is >= md 
    // }
  },
  tagName: 'li',
  // tagName: 'div',

  /**
   * @property classNames
   * @type {String}
   */
  classNames: 'sm-toggled',
  // toggleUntouched: true,
  classNameBindings: ['subMenu', 'active'],
  // toggled: function(){

  //   // Toggled false will set +/- to -
  //   // as I'm forcing submenu to display block by default
  //   // (hardcoded in hbs file)
  //   // will return as false whenever I have submenuitems
  //   return !this.get("tab.subMenuItems");
  //   // return  (this.get("tab.tabRoute") === "admin.propiedades");
  // }.property("activeTabRoute"),
  active: function() {
    return this.get("tab.tabRoute") === this.get("activeTabRoute");
  }.property("activeTabRoute"),
  subMenu: function() {
    // june 2016 - just adds some styles for submenu
    // return this.get("tab.tabRoute") === "admin.website";
    return !!this.get("tab.subMenuItems");
  }.property(),


});
