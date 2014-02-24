define(["ember"], function(Ember) {
    'use strict';

    return Ember.Route.extend({
        model: function(params) {
            return this.store.find('group', params.group_id);
        }
    });
});
