define([
    "models/group",
    "routes/index",
    "controllers/application",
    "controllers/projectStream",
    "controllers/groupDetails",
    "components/barChart",
    "router",

    "ember-selectize",
    "ember-bootstrap/bs-core.max"
], function(GroupModel, IndexRoute, ApplicationController, TeamProjectIndexController, TeamProjectGroupController, BarChartComponent, Router){
    'use strict';

    var App = {
        // Models
        GroupModel: GroupModel,

        // Components
        BarChartComponent: BarChartComponent,

        // Routes
        IndexRoute: IndexRoute,

        // Views
        // ApplicationView: ApplicationView,
        // TeamProjectIndexView: TeamProjectIndexView,
        // TeamProjectGroupView: TeamProjectGroupView,

        // Controllers
        ApplicationController: ApplicationController,
        TeamProjectIndexController: TeamProjectIndexController,
        TeamProjectGroupController: TeamProjectGroupController,

        // Etc
        Router: Router
    };

    return App;
});
