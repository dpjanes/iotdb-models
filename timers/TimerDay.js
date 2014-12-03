/*
 *  TimerDay.js
 *
 *  David Janes
 *  IOTDB
 *  2014-12-02
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('TimerDay')
    .description("wake up once per day")
    .attribute(
        iotdb.make_datetime(":when")
            .reading()
    )
    .driver_identity(":timer")
    .driver_setup(function(paramd) {
        paramd.initd.id = "timer";
        paramd.initd.hour = 0;
        paramd.initd.day_repeat = 1;
    })
    .driver_in(function(paramd) {
        if ((paramd.driverd.id === "timer") && (paramd.thingd.isodatetime !== undefined)) {
            paramd.thingd.when = paramd.driverd.isodatetime;
        }
    })
    .make()
    ;
