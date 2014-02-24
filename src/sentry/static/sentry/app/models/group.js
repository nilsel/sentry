define(["ember-data"], function(DS){
    'use strict';

    var randomNumber = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var GroupModel = DS.Model.extend({
        title: DS.attr('string'),
        culprit: DS.attr('string'),
        count: DS.attr('number'),
        firstSeen: DS.attr('date'),
        lastSeen: DS.attr('date'),
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
