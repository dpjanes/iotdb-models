/*
 *  FirmataSwitch.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-30
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('FirmataSwitch')
    .product("http://www.seeedstudio.com/depot/Grove-ButtonP-p-1243.html")
    .product("http://www.seeedstudio.com/depot/Grove-Button-p-766.html")
    .product("http://www.seeedstudio.com/depot/Grove-SwitchP-p-1252.html")
    .help("make sure to set initd.pin")
    .facet(":device.control.switch")
    .attribute(
        iotdb.make_boolean(":on", "value")
            .reading()
    )
    .driver_identity(":firmata")
    .driver_setup(function(paramd) {
        paramd.initd.pins = "value:mode=digital-input"
    })
    .make()
    ;
