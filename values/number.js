/*
 *  things/values/number.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('ValueNumber')
    .attribute(
        iotdb.make_number("value")
    )
    .make()
    ;
