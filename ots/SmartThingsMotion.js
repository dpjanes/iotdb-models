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
    .attribute(
        iotdb.make_boolean(':presence.motion', 'motion')
            .reading()
    )
    .driver_identity({
        driver_iri: "iot-driver:smartthings",
        type: "motion"
    })
    .make()
    ;
