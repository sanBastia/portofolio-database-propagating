// grab the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var validate = require('mongoose-validator')

var email_validator = [
  validate({
    validator: 'isEmail',
    message: 'Email tidak valid !'
  })
]

var date_validator = [
  validate({
    validator: 'isDate',
    message: 'Tanggal tidak valid ! [yyyy/mm/dd]'
  })
]
// create a schema
var userSchema = new Schema({
  title: { type: String, required: [true, 'Judul harus diisi'], unique: [true, 'Judul tidak boleh duplikat']},
  name: { type: String, required: [true, 'Nama harus diisi'] },
  email: {type: String, required: [true, 'Email harus diisi'], validate: email_validator },
  tanggal: {type: Date, required: [true, 'Tanggal harus diisi'],validate: date_validator}
})

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema)

// make this available to our users in our Node applications
module.exports = User
