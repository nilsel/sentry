define([
  	"views/application",
  	"controllers/application",
  	"router"
], function(ApplicationView, ApplicationController, Router){
  	/*Module Pattern*/
  	var App = {
      	ApplicationView: ApplicationView,
      	ApplicationController: ApplicationController,
      	Router: Router
  	};

  	return App;
});
