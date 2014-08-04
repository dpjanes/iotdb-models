/*
 *  WeMoSwitch.js
 *
 *  David Janes
 *  IOTDB
 *  2014-01-26
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('WeMoSwitch')
    .facet(":device.lighting")
    .product("http://www.belkin.com/us/F7C027-Belkin/p/P-F7C027/")
    .name("WeMo Switch")
    .description("Belkin WeMo Switch")
    .attribute(
        iotdb.make_boolean(":on")
            .name("on / off")
            .control()
    )
    .make_attribute_reading("on", "on-value")
    .driver_identity({
        "driver": "iot-driver:upnp",
        "deviceType": "urn:Belkin:device:controllee:1"
    })
    .driver_setup(function(paramd) {
        paramd.setupd["subscribe"] = [
            'urn:Belkin:service:basicevent:1'
        ]
    })
    .driver_in(function(paramd) {
        var d = paramd.driverd['urn:Belkin:service:basicevent:1']
        if (d) {
            if (d.BinaryState == '0') {
                paramd.thingd['on-value'] = false;
            } else if (d.BinaryState == '1') {
                paramd.thingd['on-value'] = true;
            }
        }
        if (paramd.metad !== undefined) {
            paramd.metad["schema:manufacturer"] = "http://www.belkin.com/"
            
            if (paramd.metad.modelUrl) {
                paramd.metad["schema:model"] = paramd.metad.modelUrl
            } else {
                paramd.metad["schema:model"] = "http://www.belkin.com/us/p/P-F7C027/"
            }

            if (paramd.metad.friendlyName) {
                paramd.metad["iot:name"] = paramd.metad.friendlyName
            }
        }
    })
    .driver_out(function(paramd) {
        if (paramd.thingd.on !== undefined) {
            paramd.driverd['urn:Belkin:service:basicevent:1'] = {
                'SetBinaryState' : {
                    'BinaryState' : paramd.thingd.on ? 1 : 0
                }
            }
        }
    })
    .make()
