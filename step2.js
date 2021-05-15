const fs = require("fs")
const axios = require("axios")

function cat(path){ 
    fs.readFile(path,"utf-8",(err,data)=>{
        if(err){
            console.log(`Error reading ${path}`,err)
            process.exit(1)
        }else{
            console.log(data)
        }
    })
}

async function webCat(url){
    try{
        const response = await axios.get(url)
        console.log(response.data)
    } catch(err){
        console.log(`Error fetching ${url}`,err)
        process.exit(1)
    }
}

if(process.argv[2] !== "one.txt"){
    const url = process.argv[2]
    webCat(url)
}else{
    cat("./one.txt")
}
