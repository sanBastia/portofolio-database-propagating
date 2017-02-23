var model = require('../models/user')

module.exports = {
  create: function (req, res) {
    let data = {
      title: req.body.title,
      name: req.body.name,
      email: req.body.email,
      tanggal: req.body.tanggal
    }

    model.create(data).then(function (data) {
      res.json({data: data})
    }).catch(function (err) {
      res.json({err: err})
    })
  }
}
