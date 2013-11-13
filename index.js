module.exports = function(_event, context) {
  return function(data) {
    context.emit(_event, data)
  }
}
