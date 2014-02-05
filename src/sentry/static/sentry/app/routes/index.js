define(["ember"], function(Ember) {
    return Ember.Route.extend({
        beforeModel: function() {
            this.transitionTo('team.project.index', 'team-slug', 'project-slug');
        }
    });
});
