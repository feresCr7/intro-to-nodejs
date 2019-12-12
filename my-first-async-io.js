var fs = require('fs')
let x = null
fs.readFile(process.argv[2], function(err ,content ){
    x = content.toString().split('\n').length - 1
console.log(x)
})



