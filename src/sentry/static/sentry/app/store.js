define(["ember-data"], function(DS){
    'use strict';

    // DS.RESTAdapter.reopen({
    //         namespace: 'api/0'
    // });

    return DS.Store.extend({
        adapter: DS.FixtureAdapter
    });
});
