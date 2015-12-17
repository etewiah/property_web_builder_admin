import Ember from 'ember';
import Agency from '../../models/agency';

export default Ember.Route.extend({
  // model() {
  //   var agencyDetails = Agency.get();
  //   return agencyDetails; 
  // },
  setupController(controller, model) {
    controller.set("agency", this.modelFor("admin").agencyDetails);
    var menuCards = [{
        titleKey: "cards.website",
        promptKey: "cards.websitePrompt",
        link: "admin.content",
        linkKey: "cards.websiteLink",
        tasks: [{
          titleKey: "tasks.changeLogo",
          promptKey: "tasks.changeLogoPrompt",
          link: "admin.content.settings",
          icon: "fa fa-desktop fa-2x"
        }, {
          titleKey: "tasks.changeLang",
          promptKey: "tasks.changeLangPrompt",
          link: "admin.content.settings",
          icon: "fa fa-desktop fa-2x"
        }]
      }, {
        titleKey: "cards.properties",
        promptKey: "cards.propertiesPrompt",
        link: "admin.propiedades",
        linkKey: "cards.propertiesLink",
        tasks: [{
          titleKey: "tasks.addProperty",
          promptKey: "tasks.addPropertyPrompt",
          link: "admin.propiedades.settings",
          icon: "fa fa-building-o fa-2x"
        }, {
          titleKey: "tasks.editProperty",
          promptKey: "tasks.editPropertyPrompt",
          link: "admin.propiedades.settings",
          icon: "fa fa-building-o fa-2x"
        }]
      }
    ];
    controller.set("menuCards", menuCards);

    // var defaultTodoList = [
    //   {title: "Create some content..."}
    // ];
    // controller.set("content", defaultTodoList);
  }
});
