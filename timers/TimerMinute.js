/*
 *  TimerMinute.js
 *
 *  David Janes
 *  IOTDB
 *  2014-12-02
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('TimerMinute')
    .description("wake up once per minute")
    .attribute(
        iotdb.make_datetime(":when")
            .reading()
    )
    .driver_identity(":timer")
    .driver_setup(function(paramd) {
        paramd.initd.second = 0;
        paramd.initd.minute_repeat = 1;
    })
    .driver_in(function(paramd) {
        if (paramd.driverd.isodatetime) {
            paramd.thingd.when = paramd.driverd.isodatetime;
        }
    })
    .make()
    ;
