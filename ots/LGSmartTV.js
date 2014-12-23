/*
 *  LGSmartTV.js
 *
 *  David Janes
 *  IOTDB
 *  2014-12-09
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('LGSmartTV')
    .facet(":device.media.tv")
    .product("http://www.lg.com/us/experience-tvs/smart-tv")
    .name("LG Smart TV (WebOs)")
    .attribute(
        iotdb.make_string(":band")
            .control()
    )
    .make_attribute_reading("band", "band-value")
    .attribute(
        iotdb.make_integer(":channel")
            .control()
            .minimum(1)
    )
    .make_attribute_reading("channel", "channel-value")
    .attribute(
        iotdb.make_percent(":volume")
            .control()
    )
    .make_attribute_reading("volume", "volume-value")
    .attribute(
        iotdb.make_boolean(":mute")
            .control()
    )
    .make_attribute_reading("mute", "mute-value")
    .driver_identity({
        "driver": "iot-driver:lg/smart-tv"
    })
    .driver_out(function(paramd) {
        if ((paramd.thingd.channel !== undefined) && (paramd.thingd.band === undefined)) {
            paramd.thingd.band = "TV";
        }

        if (paramd.thingd.band !== undefined) {
            if (paramd.thingd.band === "HDMI1") {
                paramd.driverd.launch = "com.webos.app.hdmi1";
            } else if (paramd.thingd.band === "HDMI2") {
                paramd.driverd.launch = "com.webos.app.hdmi2";
            } else if (paramd.thingd.band === "HDMI3") {
                paramd.driverd.launch = "com.webos.app.hdmi3";
            } else if (paramd.thingd.band === "TV") {
                paramd.driverd.launch = "com.webos.app.livetv";
            } else if (paramd.thingd.band === "Netflix") {
                paramd.driverd.launch = "netflix";
            }
        }
    })
    .make()
