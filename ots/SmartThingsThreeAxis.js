/*
 *  SmartThingsThreeAxis.js
 *
 *  David Janes
 *  IOTDB
 *  2014-08-17
 *  "Indonesian Independence Day"
 *
 *  SmartThings ThreeAxis
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('SmartThingsThreeAxis')
    .facet(":device.sensor.spatial")
    .attribute(iotdb.make_number(':x').reading().vector("x/y/z"))
    .attribute(iotdb.make_number(':y').reading().vector("x/y/z"))
    .attribute(iotdb.make_number(':z').reading().vector("x/y/z"))
    .driver_identity({
        driver: "iot-driver:smartthings",
        type: "threeAxis"
    })
    .make()
    ;

