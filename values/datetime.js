/*
 *  things/values/datetime.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('ValueDatetime')
    .attribute(
        iotdb.make_datetime("value")
    )
    .make()
    ;
