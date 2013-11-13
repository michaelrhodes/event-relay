# event-relay
event-relay is a little module for proxying events through arbitrary emitters. It will work with any event emitter implementation (EventEmitter, emitter-component, asEvented, etc) that exposes an emit() method.

[![Build status](https://travis-ci.org/michaelrhodes/event-relay.png?branch=master)](https://travis-ci.org/michaelrhodes/event-relay)

[![Browser support](https://ci.testling.com/michaelrhodes/event-relay.png)](https://ci.testling.com/michaelrhodes/event-relay)

## Install

``` sh
$ npm install event-relay
```

## API
``` 
event-relay(

  event (string):
    the name of the event that
    will be emitted

  emitter (event_emitter):
    the proxy who will emit the
    aforementioned event. must 
    have an emit() method

)
```

## Usage
``` js
var EventEmitter = require('events').EventEmitter
var relay = require('event-relay')

var source = new EventEmitter
var proxy = new EventEmitter

proxy.on('relayed-event', function(data) {
  // Do something with your data
})

source.on('event', relay('relayed-event', proxy))
source.emit('event', { some: 'data' })
```

### License
[MIT](http://opensource.org/licenses/MIT)
