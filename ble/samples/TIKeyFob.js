var iotdb = require('iotdb')
var _ = iotdb.helpers


var iot = iotdb.iot()
iot
    .connect('TIKeyFob')
    .on_change(function(thing) {
        console.log("+ state", thing.state())
    })
    .on_thing(function(thing) {
        console.log('+ thing!', thing.meta().state())
    })
