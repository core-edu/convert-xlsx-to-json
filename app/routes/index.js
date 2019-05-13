var path = require('path');
var { writeFile } = require('../data/file');

module.exports = function (app) {
    //----------GET----------------------------//
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../view', '/home.html'));
    });

    //----------POST---------------------------//
    app.post('/users', (req, res) => {
        const users = JSON.parse(req.body.usersJson).list;
        
        writeFile(users);
        
        res.send("The file has been saved!");
    });
};