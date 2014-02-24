define([
    "ember",
    "ehbs!team/project/index",
    "ehbs!team/project/settings",
    "ehbs!team/project/_project-nav"
], function(Ember) {
	'use strict';

    return Ember.Controller.extend({
        showProjectTabs: true
    });
});
