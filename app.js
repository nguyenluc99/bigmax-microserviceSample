const logger = require('bmlogger').getLogger('Sample', __filename, process.pid);
const bmweb = require('bmweb');
const app = bmweb.createApp();
const appName = app.configs().app ? app.configs().app.name || 'Sample' : 'Sample';
const serverType = app.argv.s;
const productCtr = require('./backend/microservices/control/productCtr');
const Product = require('./backend/microservices/models/product');

//Load components
const loadComps = require('./components/' + serverType);
loadComps.setup(app);

app.start(function(err) {
    const server = require('./' + serverType);
    server.start(app, function(err) {
        if (!err) logger.info('Start', appName, 'OK!');

        // new Product().new({ data: { name: 'op luc luong', cost: 32423, quantity: 65 } }, (err, result) => {
        //         console.log('123334', err, result)
        //     });
        // new Product().getAllDataDb({ data: { _sePa: { select: { name: 'op 1' } } } }, (err, result) => {
        //     console.log('123334', err, result)
        // })
        // new Product().getDataDbByIds({ data: { ids: ['5d27fd08208c98365c218d3e', '5d27fd822a7fc334f02b3b4e'] } }, (err, result) => {
        //     console.log('123334', err, result)
        // })
        // new Product().get({ data: { _id: '5d27fd08208c98365c218d3e' } }, (err, result) => {
        //     console.log('123334', err, result)
        // });

        // productCtr.new({ data: { name: 'twqtawraa', cost: 01 } }, (err, result) => {
        //     console.log('123334', err, result)
        // });
        // productCtr.lucGet({ data: { query: "2" } }, (err, result) => {
        //     console.log(213213, err, result)
        // })
        // productCtr.newArray({ data: [{ name: 'op luc ', cost: 32423, quantity: 65 }, { name: 'op luc 2', cost: 2000, quantity: 65, quality: "average" }] }, async(err, result) => {
        //     let resultdata = []
        //     try {
        //         for (let i = 0; i < result.data.length; i++) {
        //             let loading = await editt(result.data[i])
        //             resultdata.push(loading)
        //         }
        //     } catch (error) {
        //         console.log(45, error)
        //     } finally {
        //         console.log(55, err, resultdata)
        //             // console.log(48, "finally")
        //     }
        // })
    });
});
let editt = function(data) {
    return new Promise((resolve, reject) => {
        productCtr.edit({ data: { _id: data._id, cost: data.cost + 1000, name: "new" } }, (err, result) => {
            console.log(60, err, result)
            if (err) reject(err)
            else resolve(result.data)
        })
    })
}
process.on('uncaughtException', function(err) {
    logger.error('Caught exception: ', err);
});