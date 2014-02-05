define([
    "ember",
    "text!templates/team/project/group.hbs"
], function(Ember, template) {

    return Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(template)
    });
});
