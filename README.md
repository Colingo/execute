# execute

Execute commands in parallel

## Example

```js
var execute = require("execute")
    , readFile = require("fs").readFile
    , join = require("path").join
    , request = require("request")
    , equal = require("assert").equal

    , link = "https://raw.github.com/Colingo/execute" +
        "/master/README.md"

execute({
    file: function (callback) {
        readFile(join(__dirname, "..", "README.md"), callback)
    }
    , readme: function (callback) {
        request(link, function (err, res, body) {
            callback(err, body)
        })
    }
}, function (err, results) {
    var file = String(results.file)
        , readme = String(results.readme)

    equal(file, readme)
    console.log("done")
})

```

## Installation

`npm install execute`

## Contributors

 - Raynos

## MIT Licenced
