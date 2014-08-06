/*
 *  things/values/boolean.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  A boolean value
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('ValueBoolean')
    .attribute(
        iotdb.make_boolean(":value")
    )
    .make()
    ;
