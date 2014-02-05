define({
    app_name: "Sentry",
    shim : {
        'ember' : {
            deps: ['handlebars', 'jquery'],
            exports: 'Ember'
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
