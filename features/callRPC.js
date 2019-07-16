/**
 * Send data via RPC Client
 * @param {rpcClient} rpc rpcClient is called
 * @param {string} router Router key
 * @param {Object} dataInput dataInput send via RPC
 * @param {Object} opts Options
 * @returns {Promise.<object|Error>} return result if resolve, error if reject
 */
function callRPC(rpc, router, dataInput, opts = {}) {
  return new Promise((resolve, reject) => {
    rpc.send(`${rpc.opts.service.exchange}.${router}`, dataInput, opts, (err, res) => {
      if (err) return reject(router + ' ' + err);
      resolve(res);
    })
  });
}
module.exports = callRPC;