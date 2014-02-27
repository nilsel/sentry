define([
    "ember"
], function(Ember) {
    'use strict';

    return Ember.ArrayController.extend({
        statusChoices: Ember.A([
            {id: 0, name: 'Unresolved'},
            {id: 1, name: 'Resolved'},
            {id: 2, name: 'Muted'}
        ])
    });
});
