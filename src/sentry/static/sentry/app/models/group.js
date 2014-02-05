define(["ember-data"], function(DS){
    return DS.Model.extend({
        timesSeen: DS.attr('number'),
        firstSeen: DS.attr('date'),
        lastSeen: DS.attr('date')
    });
});
