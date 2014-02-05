(function(root){
    require(["config"], function(config){
        requirejs.config(config);
        require(["App", "ember"], function(App, Ember){
            var app_name = config.app_name || "App";
            root[app_name] = App = Ember.Application.create(App, {
                LOG_ACTIVE_GENERATION: true,
                LOG_MODULE_RESOLVER: true,
                LOG_TRANSITIONS: true,
                LOG_TRANSITIONS_INTERNAL: true,
                LOG_VIEW_LOOKUPS: true
            });
            window.App = App;
        });
    });
})(this);
