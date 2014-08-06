/*
 *  things/abstract/light-dimmer.js
 *
 *  David Janes
 *  IOTDB
 *  2014-01-01
 *
 *  A dimmer
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('LightDimmer')
    .facet(":device.lighting")
    .attribute(
        iotdb.make_boolean("on")
    )
    .attribute(
        iotdb.make_unit("brightness")
    )
    .make()
