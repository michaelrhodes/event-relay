module.exports = function(_event, emitter) {
  return function(data) {
    emitter.emit(_event, data)
  }
}
