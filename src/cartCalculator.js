module.exports.computeTotalPrice = function(productsArray) {
    let productGroups = buildProductGroupsArray(productsArray);
    
    //if the products in the cart could be rearranged in such a way as to maximize the savings to the customer
    //2 groups of 4 better than a group of 5 and 3?
    //((299 * 5) * .75) + ((299 * 3) * .90) = 1928.55
    //((299 * 4) * .80) + ((299 * 4) * .80) = 1,913.60

    return new Number(productGroups.reduce((total, current) => {
        return total += ((299 * current.length) * discountPercetage[current.length])
    }, 0).toFixed(2)).valueOf();
};

function buildProductGroupsArray(productsArray) {
    let productGroups = [];

    for (let product of productsArray) {
        let foundAGroup = false;
        for (let productGroup of productGroups) {
            if (!productGroup.includes(product)) {
                foundAGroup = true;
                productGroup.push(product);
                break;
            }
        }
        if (!foundAGroup) {
            productGroups.push([product]);
        }
    }

    return  productGroups;
}

const discountPercetage = {
    1: 1,
    2: .95,
    3: .90,
    4: .80,
    5: .75,
}