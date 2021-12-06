const fileSystem = require('fs')

function sortingItems(list,pos=0){
    const first = list[0]
    const position = list[pos]

   
    const processedList = list.map((element,idx)=>{
        
        if(idx==0){
            return position
        }else
        if(idx==pos){
             return first
        }else{
        return element
        }
            
    })
    return processedList

}
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
        if(element.age<=agemax && element.age>=agemin ){
            return element
        }
    })
    const stateFiltered = filtered.filter(element=>{
     
        if(element.state===state || state===null){
            return element
        }
    })
    const jobFiltered = stateFiltered.filter(element=>{
       
        if(element.job===job || job===null){
            return element
        }
    })
  
    return jobFiltered
}
function deletingById(id){
    const existingData = JSON.parse(fileSystem.readFileSync('src/'+'user.json', 'utf8'))
    const filtered = existingData.filter(element=>{
        if(element!==null){
            return element
        }
    })
    return filtered
}
module.exports={
    sortingItems,
    generatingWorkingDays,
    getDaysOfTheMonth,
    createFolder,
    createFile,
    manipulatingData,
    queryFiltering,
    deletingById
}