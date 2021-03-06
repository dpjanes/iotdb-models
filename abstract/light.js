/*
 *  things/abstract/light-simple.js
 *
 *  David Janes
 *  IOTDB
 *  2014-01-01
 *
 *  A simple lightbulb that can be turned on and off
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('Light')
    .facet(":device.lighting")
    .attribute(
        iotdb.make_boolean("on")
    )
    .make()
    ;
