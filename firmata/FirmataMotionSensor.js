/*
 *  FirmataMotionSensor.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-30
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('FirmataMotionSensor')
    .product("http://www.seeedstudio.com/depot/Grove-PIR-Motion-Sensor-p-802.html")
    .facet(":device.sensor.motion")
    .help("make sure to set initd.pin")
    .attribute(
        iotdb.make_boolean(":sensor.motion")
            .reading()
    )
    .driver_identity(":firmata")
    .driver_setup(function(paramd) {
        paramd.initd.pins = "value:mode=digital-input"
    })
    .make()
    ;
