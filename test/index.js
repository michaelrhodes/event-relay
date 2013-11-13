var run = require('tape').test
var EventEmitter = require('events').EventEmitter
var Emitter = require('emitter-component')
var asEvented = require('asEvented')
var relay = require('../')

// It works with any event emitter module
// that exposes an emit() method.
var source = new Emitter
var through = asEvented.call({})
var destination = new EventEmitter

run('it works', function(test) {
  var proxy = {
    // emit as a ‘from-source’ event
    // on the through object.
    one: relay('from-source', through),
    
    // emit as a ‘from-through’ event
    // on the destination object.
    two: relay('from-through', destination)
  }

  destination.on('from-through', function(data) {
    test.equal(data, 'it worked')
    test.end()
  })

  through.on('from-source', proxy.two)
  source.on('event', proxy.one)
  source.emit('event', 'it worked')
})
