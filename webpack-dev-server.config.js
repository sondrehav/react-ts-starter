const express = require('express');
const proxy = require('express-http-proxy');

const packageJson = require('./package.json');

module.exports = app => {
    app.use(
        `${packageJson.api}`,
        proxy('localhost:8080', {
            proxyReqPathResolver: function(req) {
                console.log(`${packageJson.api}` + req.url);
                return `${packageJson.api}` + req.url;
            }
        })
    );

    app.use(/^[^\.]+$/, (req, res) =>
        res.sendFile(`${__dirname}/local/index.html`)
    );
};
