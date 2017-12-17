module.exports = {
    register(req, res) {
        res.send({
            success: true,
            message: 'User registered with email: ' + req.body.email
        })
    }
}