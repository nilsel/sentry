(function(root){
    'use strict';

    require(["config"], function(config){
        requirejs.config(config);
        require(["App", "ember", "ember-data"], function(AppConfig, Ember, DS){
            var app_name = config.app_name || "App";
            root[app_name] = Ember.Application.createWithMixins(AppConfig);
        });
    });
})(this);
