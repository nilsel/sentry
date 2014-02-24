define(["ember"], function(Ember) {
    'use strict';

    return Ember.Route.extend({
        model: function() {
            return this.store.find('group');
        }
    });
});
