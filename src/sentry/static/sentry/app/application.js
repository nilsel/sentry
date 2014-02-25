define([
    "models/group",
    "routes/index",
    "controllers/application",
    "controllers/projectStream",
    "controllers/groupDetails",
    "components/barChart",
    "helpers/formatNumber",
    "helpers/renderEventAction",
    "routes/projectStream",
    "routes/groupDetails",
    "router",
    "store",

    "ember-selectize",
    "ember-bootstrap/bs-core.max"
], function(GroupModel, IndexRoute, ApplicationController, TeamProjectIndexController, TeamProjectGroupController, BarChartComponent,
            FormatNumberHelper, RenderEventActionHelper, TeamProjectIndexRoute, TeamProjectGroupRoute, Router, Store){
    'use strict';

    var App = {
        // Models
        GroupModel: GroupModel,

        // Components
        BarChartComponent: BarChartComponent,

        // Helpers
        FormatNumberHelper: FormatNumberHelper,
        RenderEventActionHelper: RenderEventActionHelper,

        // Routes
        IndexRoute: IndexRoute,
        TeamProjectIndexRoute: TeamProjectIndexRoute,
        TeamProjectGroupRoute: TeamProjectGroupRoute,

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
