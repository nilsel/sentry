define([
    "ember",
    "views/eventActions/default",
    "views/eventActions/exception",
    "views/eventActions/httpRequest"
], function(Ember, DefaultEventActionView, ExceptionEventActionView, HttpRequestEventActionView) {
    'use strict';

    var REGISTRY = {
        'default': DefaultEventActionView,
        'exception': ExceptionEventActionView,
        'http_request': HttpRequestEventActionView
    };

    var helper = function(action, options) {
        return Ember.Handlebars.ViewHelper.helper(this, REGISTRY[action.type || 'default'], options);
    };
    Ember.Handlebars.helper('render-event-action', helper);

    return helper;
});
