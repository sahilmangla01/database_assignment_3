const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    firstName: String,
    lastName: String,
    salary: String,
    department: String,
    lastCompany: String,
    lastSalary: String,
    overallExp: String,
    contactInfo: String,
    yearGrad: String,
    gradStream: String
})

module.exports = mongoose.model('employee',userSchema)