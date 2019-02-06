const fs = require('fs')


fs.readdir('./input/', (err, files) => {
    if (err) {
        return console.log(err);
    }
    files.forEach(file => {
        fs.readFile('./input/' + file, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            const string = JSON.parse(data)
            const minify = JSON.stringify(string)
            fs.writeFile('./output/' + file, minify, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(`The file ${file} was minified!`)
            })
        })
    })
})
