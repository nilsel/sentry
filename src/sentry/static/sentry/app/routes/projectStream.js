define([
    "ember",
    "ehbs!team/project/index",
    "ehbs!team/project/_project-nav"
], function(Ember) {
    'use strict';

    return Ember.Route.extend({
        model: function() {
            return this.store.find('group');
        }
    });
});
