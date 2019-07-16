const bmweb = require("bmweb");
const app = bmweb.app;
const BaseModel = bmweb.BaseModel;

app.modelFilter('product', 'new', {
    before(err, field, dataInput, result, next, stop) {
        console.log(7777, "model filter")
        stop(err, result)
        next(err, dataInput, result)
    },
    //after .... ~~ before
})

function product() {
    this._id = '';
    this.name = '';
    this.cost = '';
    this.quantity = '';
    this.quality = '';

    this.getDataRaw = function() {
        var raw = {};
        if (this._id !== undefined)
            raw._id = this._id;
        if (this.name !== undefined)
            raw.name = this.name;
        if (this.cost !== undefined)
            raw.cost = this.cost;
        if (this.quantity !== undefined)
            raw.quantity = this.quantity;
        if (this.quality !== undefined)
            raw.quality = this.quality;
        return raw;
    };

    this.setRawData = function(data) {
        this._id = data._id;
        this.name = data.name;
        this.cost = data.cost;
        this.quantity = data.quantity;
        this.quality = data.quality;
    };

    this.getFilter = function(dataInput) {
        return {
            _id: dataInput._id || dataInput.data._id || ""
        };
    };
}
product.prototype = new BaseModel({
    name: 'product'
});

module.exports = product;