define({
    app_name: "Sentry",
    shim: {
        'ember': {
            deps: ['handlebars', 'jquery'],
            exports: 'Ember'
        },
        'ember-data': {
            deps: ['ember'],
            exports: 'DS'
        },
        'ember-selectize': {
            deps: ['ember', 'selectize'],
        }
    },
    paths: {
        'App': 'application',
        'models': 'models',
        'views': 'views',
        'controllers': 'controllers',
        'templates': 'templates',
        /*libs*/
        'jquery': '../vendor/jquery/jquery',
        'handlebars': '../vendor/handlebars/handlebars',
        'ember': '../vendor/ember/ember',
        'ember-data': '../vendor/ember-data/ember-data',
        'ember-selectize': '../vendor/ember-selectize/ember.selectize',
        'google-code-prettify': '../vendor/google-code-prettify/src/prettify',
        'microplugin': '../vendor/microplugin/src/microplugin',
        'selectize': '../vendor/selectize/dist/js/selectize',
        'sifter': '../vendor/sifter/sifter',
        /*requirejs-plugins*/
        'text': '../vendor/requirejs-plugins/lib/text',
        'ehbs': '../vendor/require-ember-handlebars-plugin/ehbs',
        'domReady': '../vendor/requirejs-plugins/lib/domReady'
    },
    ehbs: {
        paths: {
            casing: "camel",
            templates: "templates",
            views: "views",
            controllers: "controllers",
            helpers: "helpers"
        }
    }
});
