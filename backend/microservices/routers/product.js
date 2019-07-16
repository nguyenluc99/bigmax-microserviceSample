const productCtr = require("../control/productCtr.js");
const bmweb = require("bmweb");
const app = bmweb.app;
const fs = require("fs");
const path = require("path");
// app.routerFilter()

var router = new bmweb.BaseRouter({
    name: 'product',
    methodsDefault: true,
    control: productCtr,
    methods: {
        lucGet(dataInput, callback) {
            this.control.lucGet(dataInput, callback)
        },
        vuongGet(dataInput, callback) {
            this.control.vuongGetHihi(dataInput, callback)
        },
    },
});


module.exports = router.methods;

// router.methods.new({ data: { name: 'op luc luong', cost: 32423, quantity: 65 } }, (err, result) => {
//     console.log('123334', err, result)
// })