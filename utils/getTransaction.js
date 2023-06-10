const axios = require('axios');
const API_KEY = process.env.API_KEY;

async function getTransactions(contractAddress) {
  let urlNormalTransaction =
    'https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=' +
    contractAddress +
    '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=' +
    API_KEY;

  const transactions = await axios.get(urlNormalTransaction).then((res) => {
    let transactionResults = res.data.result;
    if (typeof transactionResults === 'object') {
      return transactionResults.map((transaction) => {
        return {
          blockNumber: transaction.blockNumber,
          timeStamp: transaction.timeStamp,
          hash: transaction.hash,
          nonce: transaction.nonce,
          transactionIndex: transaction.transactionIndex,
          from: transaction.from,
          to: transaction.to,
          value: transaction.value,
          txreceipt_status: transaction.txreceipt_status,
          gasUsed: transaction.gasUsed,
          confirmations: transaction.confirmations,
          functionName: transaction.functionName,
        };
      });
    } else {
      return [];
    }
  });

  return transactions;
}

module.exports = getTransactions;
