var map = require("map-async")

module.exports = execute

function execute(hash, callback) {
    map(hash, call, callback)
}

function call(f, callback) {
    f(callback)
}
