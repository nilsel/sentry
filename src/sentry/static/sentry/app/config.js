define({
    app_name: "Sentry",
    shim : {
        'ember': {
            deps: ['handlebars', 'jquery'],
            exports: 'Ember'
        },
        'ember-data': {
            deps: ['ember'],
            exports: 'DS'
        }
    },
    paths : {
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
        /*requirejs-plugins*/
        'text': '../vendor/requirejs-plugins/lib/text',
        'hbs': '../vendor/requirejs-plugins/lib/hbs',
        'domReady': '../vendor/requirejs-plugins/lib/domReady'
    },
    /*hbs plugin options*/
    hbs: {
        disableI18n: true,
        templateExtension: "hbs"
    }
});
