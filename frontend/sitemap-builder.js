require("babel-register")({
    presets: ["es2015", "react"]
    });


const router = require('./src/router.js').default
const Sitemap = require('react-router-sitemap').default;

    (
        new Sitemap(router)
            .build('https://boring-noyce-b67dba.netlify.app/')
            .save('./public/sitemap.xml')
    );