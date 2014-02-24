define([
    "models/group",
    "routes/index",
    "controllers/application",
    "controllers/projectStream",
    "controllers/groupDetails",
    "components/barChart",
    "routes/projectStream",
    "router",
    "store",

    "ember-selectize",
    "ember-bootstrap/bs-core.max"
], function(GroupModel, IndexRoute, ApplicationController, TeamProjectIndexController, TeamProjectGroupController, BarChartComponent,
            TeamProjectIndexRoute, Router, Store){
    'use strict';

    var App = {
        // Models
        GroupModel: GroupModel,

        // Components
        BarChartComponent: BarChartComponent,

        // Routes
        IndexRoute: IndexRoute,
        TeamProjectIndexRoute: TeamProjectIndexRoute,

        // Views
        // ApplicationView: ApplicationView,
        // TeamProjectIndexView: TeamProjectIndexView,
        // TeamProjectGroupView: TeamProjectGroupView,

        // Controllers
        ApplicationController: ApplicationController,
        TeamProjectIndexController: TeamProjectIndexController,
        TeamProjectGroupController: TeamProjectGroupController,

        // Etc
        Router: Router,
        Store: Store
    };

    return App;
});
