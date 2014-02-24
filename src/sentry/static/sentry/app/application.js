define([
    "models/group",
    "routes/index",
    "controllers/application",
    "controllers/projectStream",
    "controllers/groupDetails",
    "router",

    "ember-selectize",
    "ember-bootstrap/bs-core.max"
], function(GroupModel, IndexRoute, ApplicationController, ProjectStreamController, GroupDetailsController, Router){
    'use strict';

    var App = {
        // Models
        GroupModel: GroupModel,

        // Routes
        IndexRoute: IndexRoute,

        // Views
        // ApplicationView: ApplicationView,
        // TeamProjectIndexView: TeamProjectIndexView,
        // TeamProjectGroupView: TeamProjectGroupView,

        // Controllers
        ApplicationController: ApplicationController,
        ProjectStreamController: ProjectStreamController,
        GroupDetailsController: GroupDetailsController,

        // Etc
        Router: Router
    };

    return App;
});
