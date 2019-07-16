const collectionProduct = require("../models/product/collectionProduct.js");
var product = require("../models/product");
const bmweb = require("bmweb");
const app = bmweb.app;
const BaseCtr = bmweb.BaseCtr;



app.controlFilter('productCtr', 'new', { //'new|edit|... '
        async before(err, field, dataInput, result, next, stop) {
            // console.log(999999, field, dataInput);
            // if (dataInput.data.cost <= 0) return stop(err, { ok: false, message: 'Gia khong hop le' });
            // if (dataInput.data.quantity === undefined) dataInput.data.quantity = 0
            // setTimeout(() => {
            var self = this
            console.log(14)
            let a = await new Promise((resolve, reject) => {
                    self.getAllModel({ data: { _sePa: { select: { name: dataInput.data.name } } } }, (error, result) => {
                        if (error) reject(error)
                        else resolve(result)
                    })
                })
                // console.log(21, a)
            if (a.data.length) stop({ ok: false, messgae: "product exists" })
            else next(err, dataInput, result);

            // }, 1000)
        },
        // after(err, field, dataInput, result, next, stop) {
        //     // stop({ error: "error" }, "not valid")
        //     next({ error: "non" }, "not valid")
        // }
    })
    // app.controlFilter('productCtr', {
    //     before(err, field, dataInput, result, next, stop) {
    //         console.log(999999, field, dataInput);
    //         dataInput.data.name = 'Luc';
    //         stop(err, { ok: false, message: 'fewafawef' })
    //             // setTimeout(() => {
    //             //     next(err, dataInput, result);
    //             // }, 1000)
    //     },
    //     after(err, field, dataInput, result, next, stop) {

//     }
// })
// app.controlFilter({
//     before(err, field, dataInput, result, next, stop) {
//         console.log(999999, field, dataInput);
//         dataInput.data.name = 'Luc';
//         stop(err, { ok: false, message: 'fewafawef' })
//             // setTimeout(() => {
//             //     next(err, dataInput, result);
//             // }, 1000)
//     },
//     after(err, field, dataInput, result, next, stop) {

//     }
// })

var productCtr = new BaseCtr({
    name: "productCtr",
    model: product,
    collection: collectionProduct,
    methods: {
        lucGet(dataInput, callback) {
            let data = dataInput.data;
            // query = data.query
            // new this.model().getAllDataDb({ data: { _sePa: { select: { name: 'op 2' } } } }, callback)
            // let product = await DB.collection('product').find({ name: { $regex: /op/, '$options': 'i' } }).toArray()
            // return product
            // callback
            let model = new this.model()
            model.getAllDataDb({
                data: {
                    _sePa: {
                        select: {
                            name: {
                                $regex: data.query,
                                '$options': 'i'
                            }
                        }
                    }
                }
            }, callback)
        },
        vuongGetHihi(dataInput, callback) {
            let data = dataInput.data
                // console.log(8999, data)
            let model = new this.model()
            model.getAllDataDb({
                data: {
                    _sePa: {
                        select: {
                            cost: data.cost,
                            name: {
                                $regex: data.query,
                                $options: 'i'
                            }
                        }
                    }
                }
            }, callback)
        },
        newArray: async function(dataInput, callback) {
            let model = new this.model()

            let data = dataInput.data;
            let resultdata = [];
            try {
                for (let i = 0; i < data.length; i++) {
                    // let a = await new this.model().new({ data: data[i] }, (err, result) => {
                    //     console.log(err, result)
                    // })
                    let loading = await promise(data[i]);
                    resultdata.push(loading)
                    console.log(38, i)
                }
                // console.log(40)
                callback(null, {
                    ok: true,
                    data: resultdata
                })
            } catch (error) {
                callback(error)
            }
        }
    }
});

let promise = function(data) {
    return new Promise((resolve, reject) => {
        new product().new({
            data
        }, (err, result) => {
            if (err) return reject(err)
            resolve(result.data)
        })
    })
}


module.exports = productCtr;