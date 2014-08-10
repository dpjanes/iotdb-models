/*
 *  TCPConnectedLight.js
 *
 *  David Janes
 *  IOTDB
 *  2014-08-10
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('TCPConnectedLight')
    .facet(":device.lighting")
    .name("TCP Connected Light")
    .attribute(
        iotdb.make_boolean(":on")
            .name("on / off")
            .control()
            .reading()
            .description("turn the light on or off")
    )
    .attribute(
        iotdb.make_unit(":brightness")
            .control()
            .reading()
            .description("set the intensity of the light")
    )
    .driver_identity("iot-driver:tcp-connected")
    .make()
    ;
