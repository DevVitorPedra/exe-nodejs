const fileSystem = require('fs')


function generatingWorkingDays(month){
    const monthDays = getDaysOfTheMonth(month)
    const workingDaysArray = []
    for(let i = 1;i<monthDays; i++){
        const data = new Date(`${month} ${i},2021`)
        const weekday = data.getDay()
       
        if(weekday>0 && weekday<6){
         workingDaysArray.push(data.getDate()+"/"+ month + "/" + data.getFullYear())
        }
    }
    return workingDaysArray
}
function getDaysOfTheMonth(num){
    return new Date(2021,num,0).getDate()
}
function createFolder(folderName){
    if(!fileSystem.existsSync(folderName)){
        fileSystem.mkdirSync(folderName)
        return folderName + " - criada com sucesso"
    }
}
function createFile(fileName){
    console.log(fileName)
    let data = []
        for(let i = 0; i<fileName; i++){
        data.push({"item":i+1})
    }
   const file  = fileSystem.writeFileSync(`src/item${fileName}.json`,JSON.stringify(data)
   )
   console.log('file created')
    return file
}
function manipulatingData(data, id){
    const existingJson = JSON.parse(fileSystem.readFileSync('src/'+'items.json', 'utf8'))
    if(!existingJson[id]){
        return "Id inexistente!"
    }else if(data.item==existingJson[id].item){
        return "Propriedades idênticas"
    }
    if(data!==existingJson[id]){
        existingJson[id] = data
        return existingJson
    }  
}

function queryFiltering(agemax=140,agemin=0,state=null,job=null){
    console.log('query filtering')
    const existingJson = JSON.parse(fileSystem.readFileSync('src/'+'user.json', 'utf8'))
    const filtered = existingJson.filter((element)=>{    
        if((element.age<=agemax && element.age>=agemin)
        &&(element.state===state || state===null)
        &&(element.job===job || job===null)){
            return element
        }
    })
  return filtered
    
}
function deletingById(id){
    const existingData = JSON.parse(fileSystem.readFileSync('src/'+'user.json', 'utf8'))
    console.log(id)
    const filtered = existingData.filter(element=>{
        if(element.id!=id){
            return element
        }
    })
    if(existingData.length===filtered.length){
        throw "Id inexistente"
    }
    console.log('ainda assim')
    fileSystem.writeFileSync('src/'+'user.json',JSON.stringify(filtered))
    return filtered
}
function factorial(number){
    console.log(typeof(number))
    if(number<1) throw "Número invalido"
    for(let i = number-1; i>0; i--){
        number*=i 
    }
    return number
}
function getById(id){
    const existingData = JSON.parse(fileSystem.readFileSync('src/'+'user.json', 'utf8'))
    console.log(id)
    const filtered = existingData.filter(element=>{
        if(element.id==id){
            return element
        }
    })
    console.log(filtered.length)
    if(filtered.length===0){
        throw "Id inexistente"
    }
    return filtered
}
function converting(string){
    
        let size = string.length;
        let res =''
        for (let i = 0; i < size; i++){ 
             if(string[i]==' ')res +=' '
        else if(string[i]==',') res+=',' 
        else if (string[i] >= 'a' && string[i] <= 'z')// Convertendo para uppercase
               res += String.fromCharCode(string.charCodeAt(i) - 32)
        else if (string[i] >= 'A' && string[i] <= 'Z')// Convertendo para lowercase
               res += String.fromCharCode(string.charCodeAt(i) + 32)         
        }
    return res
}

module.exports={
    sortingItems,
    generatingWorkingDays,
    getDaysOfTheMonth,
    createFolder,
    createFile,
    manipulatingData,
    queryFiltering,
    deletingById,
    factorial,
    getById,
    converting
}