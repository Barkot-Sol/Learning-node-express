const fs = require('fs');

// reading
async function reading(){
    try {
        const res = await fs.promises.readFile('./docs/text.txt') 
        console.log(res.toString());
    } catch(err){
        console.log(err)
    }
    console.log('after')
}
reading()


// writing 
fs.writeFile('./docs/text.txt', 'When will I be a banana', () => {
    console.log('updated text')
})

fs.writeFile('./docs/text2.txt', "I don't think I will be a banana", () => {
    console.log('updated text')
})

// directory
if(!fs.existsSync('./more')){
    fs.mkdir('./more', (err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log('Folder created')
        }
    })
}
else{
    fs.rmdir('./more', (err) => {
        if(err){
            console.log(err)
        }
        console.log('Folder deleted')
    })
}

// Deleting files
if(fs.existsSync('./docs/Deleteme.txt')){
    fs.unlink('./docs/Deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File deleted');
    })
}
