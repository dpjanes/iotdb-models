/*
 *  HueLight.js
 *
 *  David Janes
 *  IOTDB
 *  2014-01-26
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('HueLight')
    .facet(":device.lighting")
    .name("Hue Light")
    .description("Philips Hue colored light")
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
    .attribute(
        iotdb.make_unit(":brightness")
            .control()
            .reading()
            .description("set the intensity of the light")
    )
    .driver_identity("iot-driver:hue")
    .make()
    ;
