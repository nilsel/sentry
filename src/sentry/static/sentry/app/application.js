define([
    "models/group",
    "models/project",
    "routes/index",
    "controllers/application",
    "controllers/projectStream",
    "controllers/groupDetails",
    "components/barChart",
    "helpers/formatNumber",
    "helpers/renderEventAction",
    "routes/projectExplore",
    "routes/projectExploreItem",
    "routes/projectStream",
    "routes/groupDetails",
    "router",
    "store",

    "ember-selectize",
    "ember-bootstrap/bs-core.max"
], function(GroupModel,
            ProjectModel,
            IndexRoute,
            ApplicationController,
            TeamProjectIndexController,
            TeamProjectGroupController,
            BarChartComponent,
            FormatNumberHelper,
            RenderEventActionHelper,
            TeamProjectExploreIndexRoute,
            TeamProjectExploreItemRoute,
            TeamProjectIndexRoute,
            TeamProjectGroupRoute,
            Router,
            Store){
    'use strict';

    var App = {
        // Models
        GroupModel: GroupModel,
        ProjectModel: ProjectModel,

        // Components
        BarChartComponent: BarChartComponent,

        // Helpers
        FormatNumberHelper: FormatNumberHelper,
        RenderEventActionHelper: RenderEventActionHelper,

        // Routes
        IndexRoute: IndexRoute,
        TeamProjectExploreIndexRoute: TeamProjectExploreIndexRoute,
        TeamProjectExploreItemRoute: TeamProjectExploreItemRoute,
        TeamProjectIndexRoute: TeamProjectIndexRoute,
        TeamProjectGroupRoute: TeamProjectGroupRoute,

        // Views
        // ApplicationView: ApplicationView,
        // TeamProjectIndexView: TeamProjectIndexView,
        // TeamProjectGroupView: TeamProjectGroupView,

        // Controllers
        ApplicationController: ApplicationController,
        TeamProjectIndexController: TeamProjectIndexController,
        // TeamProjectGroupController: TeamProjectGroupController,

        // Etc
        Router: Router,
        Store: Store
    };

    return App;
});
