/*
 *  things/values/time.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('ValueTime')
    .attribute(
        iotdb.make_time("value")
    )
    .make()
    ;
