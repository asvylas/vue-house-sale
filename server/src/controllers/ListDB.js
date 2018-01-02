module.exports = {
  list (req, res) {
    res.send({
      success: true,
      msg: 'Connected to the DB'
    })
  }
}
