const axios = require('axios');

const getCryptoStats = async () => {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/stats',
    params: { referenceCurrencyUuid: 'yhjMzLPhuIDl' },
    headers: {
      'x-rapidapi-key': 'c11e1a1a9fmsh4e0cf56728e6f2ep1c9944jsn1b5cffc95a4e',
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  return response.data;
};

module.exports = { getCryptoStats };
