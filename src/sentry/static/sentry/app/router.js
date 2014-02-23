define(["ember"], function(Ember){
    'use strict';

    var Router = Ember.Router.extend();

    Router.map(function() {
        this.route('index', {path: '/'});

        this.resource('account', function(){
            this.resource('account.settings', { path: '/settings/' }, function(){
                this.route('appearance');
                this.route('notifications');
                this.route('identities');
            });
        });

        this.resource('team', { path: '/:team_slug/' }, function(){
            this.resource('team.project', { path: '/:project_slug/' }, function(){
                this.route('index', { path: '/' });
                this.route('group');
                this.resource('team.project.explore', { path: '/explore/' }, function(){
                    this.route('item');
                });
            });
            this.resource('team.settings', { path: '/settings/' }, function(){
                this.route('projects');
                this.route('members');
                this.route('access-groups');
            });

        });

    });

    return Router;
});
