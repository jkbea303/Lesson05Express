'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "default_price" on table "category"
 *
 **/

var info = {
    "revision": 3,
    "name": "categories_model_price",
    "created": "2020-02-22T23:26:52.627Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "category",
        "default_price",
        {
            "type": Sequelize.INTEGER(3),
            "field": "default_price"
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
