define([
    "routes/index",
    "views/application",
    "views/project_stream",
    "views/team_group",
    "router"
], function(IndexRoute, ApplicationView, TeamProjectIndexView, TeamProjectGroupView, Router){
    var App = {
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
