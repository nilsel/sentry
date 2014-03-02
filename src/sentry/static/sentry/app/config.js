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
            deps: ['ember', 'selectize']
        },
        'ember-bootstrap/bs-core.max': {
            deps: ['ember', 'jquery']
        }
    },
    paths: {
        'App': 'application',
        /*libs*/
        'd3': '../vendor/d3/d3.min',
        'd3-tip': '../vendor/d3-tip/index',
        'ember': '../vendor/ember/ember.min',
        'ember-bootstrap': '../vendor/ember-addons.bs_for_ember/dist/js',
        'ember-data': '../vendor/ember-data/ember-data.min',
        'ember-selectize': '../vendor/ember-selectize/ember.selectize',
        'handlebars': '../vendor/handlebars/handlebars',
        'google-code-prettify': '../vendor/google-code-prettify/src/prettify',
        'jquery': '../vendor/jquery/jquery.min',
        'microplugin': '../vendor/microplugin/src/microplugin',
        'selectize': '../vendor/selectize/dist/js/selectize',
        'sifter': '../vendor/sifter/sifter',
        /*requirejs-plugins*/
        'text': '../vendor/requirejs-plugins/lib/text',
        'ehbs': '../vendor/require-ember-handlebars-plugin/ehbs'
    },
    ehbs: {
        paths: {
            casing: "camel"
        }
    }
});
