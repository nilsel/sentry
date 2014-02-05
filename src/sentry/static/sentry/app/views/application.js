define([
  	"ember",
  	"text!templates/application.hbs"
], function(Ember, applicationTemplate) {

  	return Ember.View.extend({
      	defaultTemplate: Ember.Handlebars.compile(applicationTemplate)
  	});
});
