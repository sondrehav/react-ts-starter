const express = require('express')

module.exports = (app) => {
    app.use(/^[^\.]+$/, (req, res) =>
        res.sendFile(`${__dirname}/local/index.html`)
    )
}
