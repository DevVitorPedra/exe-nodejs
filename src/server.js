const { ESRCH } = require('constants')
const express = require('express')
const fileSystem= require('fs')
const { get } = require('http')
const { sortingItems, factorial, generatingWorkingDays, manipulatingData, queryFiltering, createFile, deletingById,getById, converting } = require('./utils')
const app = express()
app.use(express.json())

app.get('/')
app.listen(5000,()=>{
    console.log("'rodando na porta 5000'")
})

//exe01
app.patch('/sorting',(req,res)=>{
    try {
      const { list } = req.body
      const { pos } = req.query
      if(pos>list.length-1) throw 'Posição inexistente' ;
      const sorted = sortingItems(list,pos)
      return res.status(200).json({list:sorted})
    } catch (Error) {
       console.log(Error)
        return res.status(404).json({"erro":Error})
    }
})
//exe02
app.get('/workingdays/:month',(req,res)=>{
    try {
        const { month } = req.params
        if(month<1 ||month >12) throw "Mês inexistente!"
        const days = generatingWorkingDays(month)
        return res.status(200).send({'day':days})
        
    } catch (error) {
            return res.status(404).send(error)
    }
})

//exe03
app.post('/saving', (req,res)=>{
    const { data } = req.body
    try {
        if(fileSystem.existsSync('src/'+'items.json')){
            const result = JSON.parse(fileSystem.readFileSync('src/'+'items.json', 'utf8'))
            result.push(data)
            fileSystem.writeFileSync('src/'+'items.json',JSON.stringify(result))
            const resultado =JSON.parse(fileSystem.readFileSync('src/'+'items.json', 'utf8'))
            return res.status(201).send({message:resultado})
        }
        fileSystem.writeFileSync('src/'+'items.json', JSON.stringify([data]))
        const resultado =JSON.parse(fileSystem.readFileSync('src/'+'items.json', 'utf8'))
     return res.status(201).send({message:resultado})  
    } catch (error) {
        res.status(404).send({erro:error})
    }
})

//exe-04
app.put('/updating/:id', (req,res)=>{  
    const { id } = req.params
    const { data } = req.body
    console.log(id,data)
    if(fileSystem.existsSync('src/'+'items.json')){
        try {  
           const jsonData = manipulatingData(data,id)
           if(jsonData==="Id inexistente!")throw "Id Inexistente"
           if(jsonData ==="Propriedades idênticas") throw "Propriedades idênticas"
           fileSystem.writeFileSync('src/'+'items.json', JSON.stringify(jsonData))
           console.log(jsonData)
            return res.status(200).send({message:jsonData})
        } catch (error) {
            return res.status(404).send({message:error})
        }
    }
    fileSystem.writeFileSync('src/'+'items.json', JSON.stringify([data]))
    const resultado =JSON.parse(fileSystem.readFileSync('src/'+'items.json', 'utf8'))
 return res.status(201).send({message:resultado})


   
})

//exe-05
app.get('/filtered', (req,res)=>{
    const { agemax, agemin, state, job } = req.query
    try {
        const filteredData =  queryFiltering(agemax,agemin,state,job)
        if(filteredData.length===0) throw "nenhum item corresponde a pesquisa"
        return res.status(200).send({message:filteredData})
    } catch (error) {
            return res.status(404).send({message:error})
    }
})

//exe-06
app.post('/createfiles',(req,res)=>{
    const { number } = req.body
    try {
        if(number<=0 || fileSystem.existsSync(`src/item${number}.json`) ) throw "Nenhum arquivo criado"

       createFile(number)
        const resultado = JSON.parse(fileSystem.readFileSync(`src/item${number}.json`, 'utf8'))
        return res.status(201).send({message:resultado})
    } catch (error) {
        return res.status(403).send({message:error})
    }
})

//exe-07

app.delete('/delete/:id', (req,res)=>{
    try {
        const { id } = req.params
    const data = deletingById(id)
    return res.status(200).send({message:data})
    } catch (error) {
        return res.status(404).send({message:error})
    }
    
})

//exe-08

app.get('/factorial',(req,res)=>{
    
    const { number } = req.query
    console.log(number)
    try {
           const resultado = factorial(parseInt(number))
    return res.status(200).send({Fatorial:`fatorial de ${number} é ${resultado}`})
    } catch (error) {
            return res.status(404).send({message:error})
    }
 
})

//exe-09
app.get('/returningdata/:id', (req,res)=>{
        
        const { id } = req.params
        try {
           
             const resultado = getById(id)
             return res.status(200).send({message: resultado[0].name})
        } catch (error) {
            return res.status(404).send({message:error})
            
        }
       

})

//exe-10
app.post('/convertingstring', (req,res)=>{
    const { string } = req.body
    console.log(string)
    try {
        const result = converting(string)
    return res.status(200).send({message:result})
    } catch (error) {
        return res.status(404).send({message:error})
    }
    
})