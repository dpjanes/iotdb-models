/*
 *  things/values/percent.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value between 0 and 1
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('ValuePercent')
    .attribute(
        iotdb.make_number("value")
            .minimum(0)
            .maximum(100)
            .unit(":math.fraction.percent")
    )
    .make()
    ;
