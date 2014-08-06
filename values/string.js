/*
 *  things/values/string.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('ValueString')
    .attribute(
        iotdb.make_string("value")
    )
    .make()
    ;
