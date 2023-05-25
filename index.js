const fs = require('fs');
const path = require('path')
const rep = "harry"
const withi = "john"
const preview = false;
const folder = __dirname

try{
    fs.readdir(".",(err,data)=>{
        for( let i=0; i<data.length;i++){
            const item = data[i];
            let oldFile = path.join(folder,item)
            let newFile = path.join(folder,item.replaceAll(rep,withi))
            if(!preview){
                fs.rename("data/" + item, newFile ,()=>{
                    console.log("rename success");
                })
            }
            else{
                if("data/"+ item !== newFile ) console.log("data/" + item + "will be renames to" + newFile)
            }
        }
    })
}
catch(err){
    console.error(err);
}