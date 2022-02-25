/**
 * @function getTopProductsForStore
 * @description given a list of stores, a list of orders for various stores, and a list of products sold, return the top selling product for a given store
 * @param {number} storeId - the unique store identifier
 * @returns {Object} the top selling product for a given store
 *
 * @example
 * getTopProductsForStore(1);
 * @returns {object}
 * { productId: 201, type: "beer", name: "Sam Adams Boston Lager" }
 defined types
 *
 */

const stores = [{ storeId: 1 }, { storeId: 2 }, { storeId: 3 }];

const orders = [
  { orderId: 100, storeId: 1, productId: 201 },
  { orderId: 101, storeId: 2, productId: 201 },
  { orderId: 102, storeId: 1, productId: 202 },
  { orderId: 103, storeId: 1, productId: 201 },
];

const products = [
  { productId: 201, productType: "beer", name: "Sam Adams Boston Lager" },
  { productId: 202, productType: "wine", name: "Barefoot Pinot Grigio" },
  { productId: 203, productType: "liquor", name: "Titos Vodka" },
];


const getTopProductsForStore = (storeOfInterest) => {
  const orderCounts = {};

  for (let order of orders) {
    if (order.storeId == storeOfInterest) {
      const prodId = order.productId;
      if (orderCounts[`${prodId}`]) {
        console.log('inside first')
        orderCounts[`${prodId}`]++;
      } else {
        console.log(`${[prodId]}`)
        orderCounts[`${prodId}`] == 1;
      }
    }
  }

  console.log(orderCounts)

  const maxCount = -1;
  const maxProd = null;

  for (let product of products) {
    if (orderCounts[`${product.productId}`] > maxCount) {
      maxCount = orderCounts[`${product.productId}`];
      maxProd = product;
    }
  }

  return maxProd;
}

console.log(getTopProductsForStore(1));