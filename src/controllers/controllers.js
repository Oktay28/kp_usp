const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

const controllers = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let controller = require("./" + file)();
    controllers[controller.name] = controller;
  });

module.exports = controllers;