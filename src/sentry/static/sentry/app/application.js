define([
  	"views/application",
    "views/team_group",
  	"controllers/application",
    "controllers/team_project",
  	"router"
], function(ApplicationView, TeamProjectGroupView, ApplicationController, TeamProjectGroupController, TeamProjectController, Router){
  	var App = {
        // Views
      	ApplicationView: ApplicationView,
        TeamProjectGroupView: TeamProjectGroupView,

        // Controllers
      	ApplicationController: ApplicationController,
        TeamProjectController: TeamProjectController,

        // Etc
      	Router: Router
  	};

  	return App;
});
