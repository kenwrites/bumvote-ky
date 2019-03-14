const async_function = async () => {
    const pdf2txt = require('pdf2txt')
    let output = await pdf2txt.read('../vote_files/vote_history_hb2.pdf')
    console.log(output)
}