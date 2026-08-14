const fs = require('fs');

async function reading(){
    await fs.readFile('./docs/text.txt', (err, res) => {
        if(err){
            console.log(err);
        }
        console.log(res.toString());
    });
    console.log('after')
}

reading()


