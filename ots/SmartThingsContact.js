/*
 *  SmartThingsContact.js
 *
 *  David Janes
 *  IOTDB
 *  2014-03-06
 *
 *  SmartThings Contact Switch
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('SmartThingsContact')
    .attribute(
        iotdb.make_boolean(':presence.contact', 'contact')
            .reading()
    )
    .driver_identity({
        driver_iri: "iot-driver:smartthings",
        type: "contact"
    })
    .driver_setup(function(paramd) {
    })
    .make()
    ;
