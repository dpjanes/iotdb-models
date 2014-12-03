/*
 *  TimerClock.js
 *
 *  David Janes
 *  IOTDB
 *  2014-12-03
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('TimerClock')
    .description("daily alarm clock-like")
    .attribute(
        iotdb.make_datetime(":when")
            .reading()
            .control()
    )
    .attribute(
        iotdb.make_boolean(":flag", "before")
            .reading()
    )
    .attribute(
        iotdb.make_boolean(":flag", "after")
            .reading()
    )
    .driver_identity(":timer")
    .driver_setup(function(paramd) {
        paramd.initd.id = "timer";
        paramd.initd.day_repeat = 1;
        paramd.initd.minute_heartbeat = 1;
    })
    .driver_in(function(paramd) {
        if (paramd.driverd.isodatetime === undefined) {
            return;
        }

        if (paramd.driverd.id === "timer") {
            paramd.thingd.when = paramd.driverd.isodatetime;
        }

        /* compare now to the initd time */
        var datetime_timer = new paramd.libs.DateTime(paramd.initd);
        var datetime_now = new paramd.libs.DateTime();

        if (datetime_now.compare(datetime_timer) < 0) {
            paramd.thingd.before = true;
            paramd.thingd.after = false;
        } else {
            paramd.thingd.before = false;
            paramd.thingd.after = true;
        }
    })
    .make()
    ;
