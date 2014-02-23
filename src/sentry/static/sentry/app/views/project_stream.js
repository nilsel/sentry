define([
    "ember",
    "text!templates/team/project/index.hbs",
    "text!templates/team/project/-project-nav.hbs"
], function(Ember, template) {

    return Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(template)
    });
});
