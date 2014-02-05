define([
    "ember",
    "text!templates/team/project/index.hbs"
], function(Ember, template) {

    return Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(template)
    });
});
