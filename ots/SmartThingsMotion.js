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
    .i("open", iotdb.sensor.boolean.motion)
    .driver_identity({
        driver: "iot-driver:smartthings",
        type: "motion"
    })
    .make()
    ;
