/*
 *  DenonAVR.js
 *
 *  David Janes
 *  IOTDB
 *  2014-12-06
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('DenonAVR')
    .facet(":device.lighting")
    .name("Denon AVR")
    .description("Denon Audio/Visual Receivers")
    .attribute(
        iotdb.make_boolean(":on")
            .name("on / off")
            .description("turn the on or off/standby")
    )
    .make_attribute_reading("on", "on-value")
    .attribute(
        iotdb.make_percent(":volume")
    )
    .make_attribute_reading("volume", "on-value")
    .attribute(
        iotdb.make_string(":band")
            .control()
    )
    .make_attribute_reading("band", "band-value")
    .driver_identity("iot-driver:telnet")
    .driver_out(function(paramd) {
        var commands = [];
        var any = false;
        var many = false;

                // commands.push([ "send", 'SI?\r' ]);

        if (paramd.thingd.volume !== undefined) {
            var volume = Math.round(paramd.thingd.volume);

            if (volume !== 0) {
                paramd.thingd.on = true;
            } 

            if (volume < 10) {
                commands.push([ "send", "MV0" + volume + "\r" ]);
            } else {
                commands.push([ "send", "MV" + volume + "\r" ]);
            }
        }

        if (paramd.thingd.band !== undefined) {
            var volume = Math.round(paramd.thingd.volume);

            if (volume !== 0) {
                paramd.thingd.on = true;
            } 

            var band = paramd.thingd.band.toUpperCase()
            if (band === "CD") {
                commands.push([ "send", "SICD\r" ]);
            } else if (band === "TUNER") {
                commands.push([ "send", "SITUNER\r" ]);
            } else if (band === "DVD") {
                commands.push([ "send", "SIDVD\r" ]);
            } else if (band === "BD") {
                commands.push([ "send", "SIBD\r" ]);
            } else if (band === "SAT") {
                commands.push([ "send", "SISAT/CBL\r" ]);
            } else if (band === "GAME") {
                commands.push([ "send", "SIGAME\r" ]);
            } else if (band === "V.AUX") {
                commands.push([ "send", "SIV.AUX\r" ]);
            } else if (band === "MPLAY") {
                commands.push([ "send", "SIMPLAY\r" ]);
            } else if (band === "DOCK") {
                commands.push([ "send", "SIDOCK\r" ]);
            } else if (band === "NET/USB") {
                commands.push([ "send", "SINET/USB\r" ]);
            } else if (band === "TV") {
                commands.push([ "send", "SITV\r" ]);
            } else if (band === "IRADIO") {
                commands.push([ "send", "SIIRADIO\r" ]);
            } else if (band === "USB/IPOD") {
                commands.push([ "send", "SIUSB/IPOD\r" ]);
            } else if (band === "USB") {
                commands.push([ "send", "SIUSB\r" ]);
            } else if (band === "IPD") {
                commands.push([ "send", "SIIPD\r" ]);
            }
        }

        if (paramd.thingd.on !== undefined) {
            if (paramd.thingd.on) {
                commands.unshift([ "send", "PWON\r" ]);
                commands.push([ "send", 'MV?\r' ]);
            } else {
                commands.push([ "send", "PWSTANDBY\r" ]);
            }
        }

        if (commands.length) {
            paramd.driverd.maxwait = 2.5;
            paramd.driverd.commands = commands;
        }
    })
    .make()
    ;
