const fs = require('fs')
var path = require('path')


const directorypath = process.argv[2]
const extension = process.argv[3]
let directoryContent = fs.readdir(directorypath, function(err, filelist) {
    if (err) {
      console.log("Error getting directory information.")
    } else {
      filelist.forEach(file =>{
          if (path.extname(file) === "."+extension){
              console.log(file)
          }
      })
    }
  })