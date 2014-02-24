define(["ember-data"], function(DS){
    'use strict';

    var GroupModel = DS.Model.extend({
        title: DS.attr('string'),
        culprit: DS.attr('string'),
        timesSeen: DS.attr('number'),
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
            timesSeen: 1341234234,
            firstSeen: new Date(),
            lastSeen: new Date(),
            historicalData: [
              {
                "count": 5002,
                "time": 1361668611
              },
              {
                "count": 1466,
                "time": 1361755011
              },
              {
                "count": 2472,
                "time": 1361841411
              },
              {
                "count": 5174,
                "time": 1361927811
              },
              {
                "count": 6715,
                "time": 1362014211
              },
              {
                "count": 9687,
                "time": 1362100611
              },
              {
                "count": 3545,
                "time": 1362187011
              },
              {
                "count": 6975,
                "time": 1362273411
              },
              {
                "count": 7289,
                "time": 1362359811
              },
              {
                "count": 8080,
                "time": 1362446211
              },
              {
                "count": 7156,
                "time": 1362532611
              },
              {
                "count": 4047,
                "time": 1362619011
              },
              {
                "count": 7166,
                "time": 1362705411
              },
              {
                "count": 3071,
                "time": 1362791811
              },
              {
                "count": 5681,
                "time": 1362878211
              },
              {
                "count": 530,
                "time": 1362964611
              },
              {
                "count": 6076,
                "time": 1363051011
              },
              {
                "count": 4307,
                "time": 1363137411
              },
              {
                "count": 6120,
                "time": 1363223811
              },
              {
                "count": 9597,
                "time": 1363310211
              },
              {
                "count": 716,
                "time": 1363396611
              },
              {
                "count": 9170,
                "time": 1363483011
              },
              {
                "count": 4867,
                "time": 1363569411
              },
              {
                "count": 6696,
                "time": 1363655811
              }
            ]
        });
    }

    return GroupModel;
});
