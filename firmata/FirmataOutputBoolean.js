/*
 *  FirmataOutputBoolean.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-30
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('FirmataOutputBoolean')
    .help("make sure to set initd.pin")
    .attribute(
        iotdb.make_boolean(":value")
            .control()
    )
    .driver_identity(":firmata")
    .driver_setup(function(paramd) {
        paramd.initd.pins = "value:mode=digital-output"
    })
    .make()
    ;
