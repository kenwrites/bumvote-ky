
var filePath = '../vote_files/vote_history_hb2.pdf'
var extract = require('pdf-text-extract')
extract(filePath, function (err, pages) {
    if (err) {
        console.dir(err)
        return
    }
    console.dir(pages)
})