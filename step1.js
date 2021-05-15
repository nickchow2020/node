const fs = require("fs")

function cat(path){ 
    fs.readFile(path,"utf-8",(err,data)=>{
        if(err){
            console.log(`Error reading ${path}`,err)
        }else{
            console.log(data)
        }
    })
}


if(process.argv[2]){
    const url = process.argv[2]
    cat(url)
}