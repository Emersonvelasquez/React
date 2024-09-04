// /**
//  * This functicon calculates total price of a new order
//  * @param {Array} products cartProduct:Array of Objects
//  * @returns {numer} Total price
//  */

export const totalPrice = (items) => {
    let sum = 0
    items.forEach(items => sum += items.price)
    return sum 
}
