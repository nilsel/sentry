App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {

  this.resource('account', function() {
    this.resource('account.settings', { path: '/settings' }, function() {
      this.route('appearance');
      this.route('notifications');
      this.route('identities');
    });
  });

  this.resource('team', function() {
    this.resource('team.project', { path: '/project' }, function() {
      this.route('group');
      this.resource('team.project.explore', { path: '/explore'}, function() {
        this.route('item');
      });
      this.route('settings');
    });

    this.resource('team.settings', { path: '/settings' }, function() {
      this.route('projects');
      this.route('members');
      this.route('access-groups');
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('team.project');
  }
});

App.TeamProjectController = Ember.Controller.extend({
  needs: ['teamProjectGroup', 'teamProjectIndex'],
  showProjectNav: Ember.computed.alias('controllers.teamProjectGroup.showProjectNav'),
  
  actions: { 
    toggleNav: function() {
      this.toggleProperty('showProjectNav');
    }
  }
});

App.TeamProjectGroupController = Ember.Controller.extend({
  showProjectNav: false
});

App.TeamProjectIndexController = Ember.Controller.extend({
  showProjectNav: true
});

$(function() {
  $('.frame').click(function(e){
    $(this).toggleClass('expanded');
    e.preventDefault;
  });
});
