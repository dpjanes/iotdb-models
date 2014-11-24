/*
 *  LIFXLight.js
 *
 *  David Janes
 *  IOTDB
 *  2014-11-24
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('LIFXLight')
    .facet(":device.lighting")
    .name("LIFX Light")
    .description("LIFX colored light")
    .attribute(
        iotdb.make_boolean(":on")
            .name("on / off")
            .control()
            .reading()
            .description("turn the light on or off")
    )
    .attribute(
        iotdb.make_color(":color")
            .control()
            .reading()
            .description("set the color of the light")
    )
    .driver_identity("iot-driver:lifx")
    .make()
    ;
