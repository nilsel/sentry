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
        },
        'ember-bootstrap/bs-core.max': {
            deps: ['ember', 'jquery']
        }
    },
    paths: {
        'App': 'application',
        'models': 'models',
        'views': 'views',
        'controllers': 'controllers',
        'templates': 'templates',
        /*libs*/
        'ember': '../vendor/ember/ember',
        'ember-bootstrap': '../vendor/ember-addons.bs_for_ember/dist/js',
        'ember-data': '../vendor/ember-data/ember-data',
        'ember-selectize': '../vendor/ember-selectize/ember.selectize',
        'handlebars': '../vendor/handlebars/handlebars',
        'google-code-prettify': '../vendor/google-code-prettify/src/prettify',
        'jquery': '../vendor/jquery/jquery',
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
