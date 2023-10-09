const User = require('../Model/userModel')

async function addNewUser(req,res){
    try{
       const data = await User.create([{
            firstName: "John",
            lastName: "Doe",
            salary: "25000",
            department: "HR",
            lastCompany: "X",
            lastSalary: "10000",
            overallExp: "2",
            contactInfo: "1234567890",
            yearGrad: "2016",
            gradStream: "CSE"
          },{
            firstName: "Rohan",
            lastName: "Jame",
            salary: "30000",
            department: "Technical",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "1",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
          },{
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "20000",
            overallExp: "1",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "ECE"
          },{
            firstName: "Sao",
            lastName: "Avika",
            salary: "30000",
            department: "Sales",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
          },{
            firstName: "Jame",
            lastName: "roh",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "EEE"
          },{
            firstName: "Rohan",
            lastName: "Jame",
            salary: "30000",
            department: "Technical",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "1",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
          },{
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "20000",
            overallExp: "1",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "ECE"
          },{
            firstName: "Sao",
            lastName: "Avika",
            salary: "30000",
            department: "Sales",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
          },{
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "EEE"
          },{
            firstName: "Rohan",
            lastName: "Jame",
            salary: "30000",
            department: "Technical",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "1",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
          },{
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "20000",
            overallExp: "1",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "ECE"
          },{
            firstName: "Sao",
            lastName: "Avika",
            salary: "30000",
            department: "Sales",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
          },{
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "EEE"
          }])
          res.send({user: data})
    }
    catch(err){
        res.send('error occured' , err)
    }

}
// Querry: Find All 
async function findAll(req,res){
    try{
        const data = await User.find()
    res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}

//Querry: FindSalary
async function FindSalary(req,res){
    try{
        const data = await User.find({"salary":{$gt:"30000"}})
    res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}

//Querry: FindExperience
async function FindExperience(req,res){
    try{
        const data = await User.find({"overallExp":{$gt:"2"}})
    res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}
//Querry: Find3
async function Find3(req,res){
    try{
      const query = [{overallExp:{$gt:"1"}},{yearGrad:{$gt:"2015"}}]
      const data = await User.find()
    res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}

// Querry : Update Salary
async function updateSalary(req,res){
    try{
        const data = await User.updateMany({"salary":"35000"},{$set :{"salary":"40000"}})
        res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}
// Querry : delete
async function deleteQuerry(req,res){
    try{
        const data = await User.deleteMany({"lastCompany":"Y"})
        res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}




module.exports = {addNewUser , findAll,FindSalary ,FindExperience , Find3 , updateSalary , deleteQuerry}