const fs = require("fs")
const axios = require("axios");
let replaceData;


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

async function webCat(urlr,urlw=null){
    if(!urlw){
        try{
            const response = await axios.get(urlr)
            console.log(response.data)
        } catch(err){
            console.log(`Error fetching!!! ${url}`,err)
            process.exit(1)
        }
    }else{
        try{
            const response = await axios.get(urlr)
            const data = response.data
            writeFile(urlw,data)
        } catch(err){
            console.log(`Error fetching!!! ${url}`,err)
            process.exit(1)
        }
    }
}


function readFile(urlr,urlw){
    fs.readFile(urlr,"utf8",(err,data)=>{
        if(err){
            console.log("Error occurs",err)
        }
        
        writeFile(urlw,data)
    })
}

function writeFile(url,ctn){
    fs.writeFile(url,ctn,"utf8",err=>{
        if(err){
            console.log("Error Occurs",err)
        }
    })
}

if(process.argv[2] !== "one.txt" && process.argv[2] !== "--out"){
    const url = process.argv[2]
    webCat(url)
}else if(process.argv[2] === "--out"){
    const readData = process.argv[4]
    const writeData = process.argv[3]
    if(readData === "one.txt"){
        readFile(readData,writeData)
    }else{
        webCat(readData,writeData)
    }
    
}else{
    cat("./one.txt")
}