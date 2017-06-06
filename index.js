var slice = Array.prototype.slice

module.exports = relay

function relay (_event, emitter) {
  return function () {
    var args = slice.call(arguments)
    args.unshift(_event)
    emitter.emit.apply(emitter, args)
  }
}
