import Ember from 'ember';
import Agency from '../../models/agency';

export default Ember.Route.extend({
  model(params) {
      return this.store.query("info", {
        filter: {
          key: "welcome",
          lang_code: "en"
        }
      });
      // return this.store.findAll('webContent'); 
      // return params.tabName;
      // return this.store.findRecord('webContent', "test");
    },


    setupController(controller, model) {
      controller.set("agency", this.modelFor("admin").agencyDetails);
      var menuCards = [{
        titleKey: "cards.website",
        promptKey: "cards.websitePrompt",
        linkParams: "",
        link: "admin.content",
        linkKey: "cards.websiteLink",
        tasks: [{
          titleKey: "tasks.changeLogo",
          promptKey: "tasks.changeLogoPrompt",
          // linkParams: {"tabName": "general"},
          // above will result in route model not getting called
          linkParams: "general",
          link: "admin.content.tab",
          icon: "fa fa-desktop fa-2x"
        }, {
          titleKey: "tasks.changeLegalText",
          // promptKey: "tasks.changeLangPrompt",
          linkParams: "legal",
          link: "admin.content.tab",
          icon: "fa fa-desktop fa-2x"
        }]
      }, {
        titleKey: "cards.properties",
        promptKey: "cards.propertiesPrompt",
        linkParams: "",
        link: "admin.propiedades",
        linkKey: "cards.propertiesLink",
        tasks: [{
          titleKey: "tasks.addProperty",
          // promptKey: "tasks.addPropertyPrompt",
          link: "admin.propiedades.nuevo",
          icon: "fa fa-building-o fa-2x"
        }, {
          titleKey: "tasks.manageProperties",
          // promptKey: "tasks.managePropertiesPrompt",
          // linkParams: null,
          link: "admin.propiedades.default",
          icon: "fa fa-building-o fa-2x"
        }]
      }];
      controller.set("menuCards", menuCards);
      controller.set("info", model);
      // var defaultTodoList = [
      //   {title: "Create some content..."}
      // ];
      // controller.set("content", defaultTodoList);
    }
});
