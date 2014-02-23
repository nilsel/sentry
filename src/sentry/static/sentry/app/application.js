define([
    "models/group",
    "routes/index",
    "views/application",
    "views/project_stream",
    "views/team_group",
    "router",

    "ember-selectize",
    "ember-bootstrap/bs-core.max"
], function(GroupModel, IndexRoute, ApplicationView, TeamProjectIndexView, TeamProjectGroupView, Router){
    var App = {
        // Models
        GroupModel: GroupModel,

        // Routes
        IndexRoute: IndexRoute,

        // Views
        ApplicationView: ApplicationView,
        TeamProjectIndexView: TeamProjectIndexView,
        TeamProjectGroupView: TeamProjectGroupView,

        // Controllers
        // ApplicationController: ApplicationController,
       //  TeamProjectController: TeamProjectController,

        // Etc
        Router: Router
    };

    return App;
});
