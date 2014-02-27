define(["ember-data"], function(DS){
    'use strict';

    var ProjectModel = DS.Model.extend({
        name: DS.attr('string'),
        slug: DS.attr('string')
    });

    // TODO: should be moved out into some dev-only utility?
    ProjectModel.FIXTURES = [{
      id: 1,
      name: "Test Project",
      slug: "test"
    }];

    return ProjectModel;
});
