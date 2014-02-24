define(["ember"], function(Ember) {
    'use strict';

    return Ember.Route.extend({
        beforeModel: function() {
            this.transitionTo('team.project.index', 'team-slug', 'project-slug');
        }
    });
});


