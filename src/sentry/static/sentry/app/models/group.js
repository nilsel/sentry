define(["ember-data"], function(DS){
	'use strict';

    return DS.Model.extend({
        timesSeen: DS.attr('number'),
        firstSeen: DS.attr('date'),
        lastSeen: DS.attr('date')
    });
});
