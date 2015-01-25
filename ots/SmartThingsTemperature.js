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
    .i("temperature", iotdb.sensor.number.temperature.fahrenheit)
    .driver_identity({
        driver: "iot-driver:smartthings",
        type: "temperature"
    })
    .make()
    ;
