define(["ember-data"], function(DS){
    'use strict';

    var TeamModel = DS.Model.extend({
        name: DS.attr('string'),
        slug: DS.attr('string')
    });

    // TODO: should be moved out into some dev-only utility?
    TeamModel.FIXTURES = [{
      id: 1,
      name: "Sentry",
      slug: "sentry"
    }];

    return TeamModel;
});
