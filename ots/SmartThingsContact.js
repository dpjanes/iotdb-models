"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('SmartThingsContact')
    .attribute(
        iotdb.make_boolean(":open")
            .reading()
    )
    .driver_identity({
        driver: "iot-driver:smartthings",
        type: "contact"
    }) 
    .driver_in(function(paramd) {
        if (paramd.driverd.contact !== undefined) {
            paramd.thingd.open = paramd.driverd.contact ? false : true
        }
    })
    .make()
    ;


