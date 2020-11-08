const json = JSON.stringify([
   { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
   { type: 'socks', color: 'green', quantity: 5, priceForPair: '$10' },
   { type: 'socks', color: 'blue', quantity: 8, priceForPair: '$6' },
   { type: 'hat', color: 'red', quantity: 7, priceForPair: '$5' },
   { type: 'hat', color: 'green', quantity: 0, priceForPair: '$6' },
   { type: 'socks', color: 'blue', priceForPair: '$6' },
   { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
   { type: 'socks', color: 'white', quantity: 3, priceForPair: '$4' },
   { type: 'socks', color: 'green', priceForPair: '$10' },
   { type: 'socks', color: 'blue', quantity: 2, priceForPair: '$6' },
   { type: 'hat', color: 'green', quantity: 3, priceForPair: '$5' },
   { type: 'hat', color: 'red', quantity: 1, priceForPair: '$6' },
   { type: 'socks', color: 'blue', priceForPair: '$6' },
]);

function sortProducts(products, key, value) {
   return products.filter((product) => product[key] && product[key] === value);
}

module.exports = sortProducts;
