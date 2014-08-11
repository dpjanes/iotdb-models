/*
 *  SmartThingsSwitch.js
 *
 *  David Janes
 *  IOTDB
 *  2014-03-06
 *
 *  SmartThings Z-Wave Switch
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('SmartThingsSwitch')
    .facet(":device.switch")
    .attribute(
        iotdb.make_boolean(":on")
            .name("on / off")
    )
    .driver_identity({
        driver: "iot-driver:smartthings",
        type: "switch"
    })
    .driver_out(function(paramd) {
        if (paramd.thingd.on !== undefined) {
            paramd.driverd['switch'] = paramd.thingd.on ? 1 : 0
        }
    })
    .driver_in(function(paramd) {
        if (paramd.driverd['switch'] !== undefined) {
            paramd.thingd['on'] = paramd.driverd['switch']
        }
    })
    .make()
    ;
