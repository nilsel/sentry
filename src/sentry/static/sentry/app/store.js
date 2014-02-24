define(["ember-data"], function(DS){
    'use strict';

    return DS.Store.extend({
        adapter: DS.FixtureAdapter
    });
});
