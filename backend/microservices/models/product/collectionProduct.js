const bmweb = require("bmweb");
const app = bmweb.app;
const BaseCollectionModel = bmweb.BaseCollectionModel;

function collection() {
  BaseCollectionModel.apply(this, arguments);
}
module.exports = collection;