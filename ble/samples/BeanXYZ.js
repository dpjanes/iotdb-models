var iotdb = require('iotdb')
var _ = iotdb.helpers

var iot = iotdb.iot()

iot
    .connect('BeanXYZ')
    .on_change(function(thing) {
        console.log("+ change", thing.state())
    })
