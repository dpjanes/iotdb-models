/*
 *  SmartThingsTemperature.js
 *
 *  David Janes
 *  IOTDB
 *  2014-08-17
 *  "Indonesian Independence Day"
 *
 *  SmartThings Temperature Level
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('SmartThingsTemperature')
    .facet(":device.sensor.climate")
    .attribute(
        iotdb.make_number(':sensor.temperature')
            .unit(":temperature.imperial.fahrenheit")
            .reading()
    )
    .driver_identity({
        driver: "iot-driver:smartthings",
        type: "temperature"
    })
    .make()
    ;
