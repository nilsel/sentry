define([
    "ember",
    "ehbs!team/project/index",
    "ehbs!team/project/settings",
    "ehbs!team/project/_project-nav"
], function(Ember, GroupModel) {
    'use strict';

    return Ember.ArrayController.extend({
        statusChoices: Ember.A([
            {id: 0, name: 'Unresolved'},
            {id: 1, name: 'Resolved'},
            {id: 2, name: 'Muted'}
        ])
    });
});
