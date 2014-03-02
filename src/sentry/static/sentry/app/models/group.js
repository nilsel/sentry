define(["ember-data"], function(DS){
    'use strict';

    var randomNumber = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var GroupModel = DS.Model.extend({
        title: DS.attr('string'),
        message: DS.attr('string'),
        culprit: DS.attr('string'),
        count: DS.attr('number'),
        timeSpent: DS.attr('number'),
        firstSeen: DS.attr('date'),
        lastSeen: DS.attr('date'),
        actions: DS.attr(),
        historicalData: DS.attr()
    });

    // TODO: should be moved out into some dev-only utility?
    GroupModel.FIXTURES = [];
    for (var i = 0; i < 25; i++) {
        GroupModel.FIXTURES.push({
            id: i,
            title: 'Inbound email from unknown address: foo@example.com',
            culprit: 'sentry.tasks.email in process_inbound_email',
            count: randomNumber(1, 10000),
            firstSeen: new Date(),
            lastSeen: new Date(),
            // actions are only available via details
            actions: [
              {
                "type": "http_request",
                "timestamp": "2008-09-08T22:47:31Z",
                "url": "http://localhost/",
                "method": "GET"
              },
              {
                "timestamp": "2008-09-08T22:47:31Z",
                "label": "Arbitrary event",
                "message": "Somethin' happened bro"
              },
              {
                "type": "exception",
                "timestamp": "2008-09-08T22:47:31Z",
                "values": [
                  {
                    "type": "ValueError",
                    "value": "foo is not bar",
                    "stacktrace": [
                      {
                        "line": 77,
                        "filename":
                        "django/core/handlers/base.py",
                        "function": "wrapped_view",
                        "context": [
                          {"line": 74, "text": "# We could just do view_func.csrf_exempt = True, but decorators"},
                          {"line": 75, "text": "# are nicer if they don't have side-effects, so we return a new"},
                          {"line": 76, "text": "# function."},
                          {"line": 77, "text": "def wrapped_view(*args, **kwargs):"},
                          {"line": 78, "text": "  return view_func(*args, **kwargs)"},
                          {"line": 79, "text": "wrapped_view.csrf_exempt = True"},
                          {"line": 80, "text": ""}
                        ]
                      },
                      {
                        "line": 54,
                        "filename":
                        "django/core/handlers/base.py",
                        "function": "wrapped_view",
                        "context": [
                          {"line": 51, "text": "# We could just do view_func.csrf_exempt = True, but decorators"},
                          {"line": 52, "text": "# are nicer if they don't have side-effects, so we return a new"},
                          {"line": 53, "text": "# function."},
                          {"line": 54, "text": "def wrapped_view(*args, **kwargs):"},
                          {"line": 55, "text": "  return view_func(*args, **kwargs)"},
                          {"line": 56, "text": "wrapped_view.csrf_exempt = True"},
                          {"line": 57, "text": ""}
                        ]
                      },
                      {
                        "line": 32,
                        "filename":
                        "django/core/handlers/base.py",
                        "function": "wrapped_view",
                        "context": [
                          {"line": 29, "text": "# We could just do view_func.csrf_exempt = True, but decorators"},
                          {"line": 30, "text": "# are nicer if they don't have side-effects, so we return a new"},
                          {"line": 31, "text": "# function."},
                          {"line": 32, "text": "def wrapped_view(*args, **kwargs):"},
                          {"line": 33, "text": "  return view_func(*args, **kwargs)"},
                          {"line": 34, "text": "wrapped_view.csrf_exempt = True"},
                          {"line": 35, "text": ""}
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            historicalData: [
              {
                "count": randomNumber(1, 10000),
                "time": 1361668611
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1361755011
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1361841411
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1361927811
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362014211
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362100611
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362187011
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362273411
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362359811
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362446211
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362532611
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362619011
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362705411
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362791811
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362878211
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1362964611
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1363051011
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1363137411
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1363223811
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1363310211
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1363396611
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1363483011
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1363569411
              },
              {
                "count": randomNumber(1, 10000),
                "time": 1363655811
              }
            ]
        });
    }

    return GroupModel;
});
