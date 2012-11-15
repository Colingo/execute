# execute

Execute commands in parallel

## Example

```js
var execute = require("execute")

execute({
    "steve": function (callback) {
        shootHimInTheFace(callback)
    },
    "james": function (callback) {
        pushHimInTheBlender(callback)
    }
}, function (err, corpses) {
    if (err) {
        return executeHenchman()
    }

    dispose(corpses)
})
```

## Installation

`npm install execute`

## Contributors

 - Raynos

## MIT Licenced
