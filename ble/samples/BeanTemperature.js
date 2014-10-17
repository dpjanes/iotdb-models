var iotdb = require('iotdb')
var _ = iotdb.helpers

var iot = iotdb.iot()

iot
    .connect('BeanTemperature')
    .on(':temperature', function(thing, attribute, value) {
        console.log('+ temperature', value)
        console.log('+ meta', thing.meta().state())
    })

