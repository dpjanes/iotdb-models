/*
 *  things/abstract/timer.js
 *
 *  David Janes
 *  IOTDB
 *  2014-01-07
 *
 *  A simple down timer
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('Timer')
    .facet(":device.clock")
    .attribute(
        iotdb.make_string(":timer")
            .reading()
            .format(":timedelta")
    )
    .make_attribute_control("timer", "timer-set")
    .make()
    ;
