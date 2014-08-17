/*
 *  SmartThingsMotion.js
 *
 *  David Janes
 *  IOTDB
 *  2014-03-06
 *
 *  SmartThings Motion Detector
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('SmartThingsMotion')
    .facet(":device.sensor.motion")
    .attribute(
        iotdb.make_boolean(':sensor.motion', 'motion')
            .reading()
    )
    .driver_identity({
        driver: "iot-driver:smartthings",
        type: "motion"
    })
    .make()
    ;
