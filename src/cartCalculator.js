module.exports.computeTotalPrice = function(productsArray) {
    if (!(productsArray instanceof Array) || productsArray.length < 1) return 0.00;
    
    return new Number(buildProductGroupsArray(productsArray).reduce((total, current) => {
        return total += ((299 * current.length) * discountPercentage[current.length])
    }, 0).toFixed(2)).valueOf();
};

function buildProductGroupsArray(productsArray, productGroups = [], completeSets = []) {
    for (let product of productsArray) {
        let foundAGroup = false;
        for (let productGroup of productGroups) {
            if (!productGroup.includes(product)) {
                foundAGroup = true;
                productGroup.push(product);
                let productGroupIndex = productGroups.indexOf(productGroup);
                if (productGroup.length === 5) {
                    completeSets.push(productGroups.splice(productGroupIndex, productGroupIndex + 1));
                }
                break;
            }
        }
        if (!foundAGroup) {
            productGroups.push([product]);
        }
    }

    return [...productGroups, ...completeSets];
}

const discountPercentage = {
    1: 1,
    2: .95,
    3: .90,
    4: .80,
    5: .75,
}