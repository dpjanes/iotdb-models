/*
 *  SmartThingsBattery.js
 *
 *  David Janes
 *  IOTDB
 *  2014-08-17
 *  "Indonesian Independence Day"
 *
 *  SmartThings Battery Level
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('SmartThingsBattery')
    .facet(":device.sensor.battery")
    .i("battery", iotdb.sensor.percent.battery)
    .driver_in(function(paramd) {
        if (paramd.driverd.battery) {
            paramd.thingd.battery = paramd.driverd.battery * 100
        }
    })
    .make()
    ;
