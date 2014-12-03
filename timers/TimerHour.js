/*
 *  TimerHour.js
 *
 *  David Janes
 *  IOTDB
 *  2014-12-02
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('TimerHour')
    .description("wake up once per hour")
    .attribute(
        iotdb.make_datetime(":when")
            .reading()
    )
    .driver_identity(":timer")
    .driver_setup(function(paramd) {
        paramd.initd.minute = 0;
        paramd.initd.hour_repeat = 1;
    })
    .driver_in(function(paramd) {
        if (paramd.driverd.isodatetime) {
            paramd.thingd.when = paramd.driverd.isodatetime;
        }
    })
    .make()
    ;
