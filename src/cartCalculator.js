module.exports.computeTotalPrice = function(productsArray) {
    if (!(productsArray instanceof Array) || productsArray.length < 1) return 0.00;
    
    return new Number(buildProductGroupsArray(productsArray).reduce((total, current) => {
        return total += ((299 * current.length) * discountPercentage[current.length])
    }, 0).toFixed(2)).valueOf();
};

function buildProductGroupsArray(productsArray, productGroups = [], completeSets = []) {
    let uniqueProductsCount = getUniqueProductsCount(productsArray);

    for (let product of productsArray) {
        let foundAGroup = false;
        let fullGroupIndex;
        for (let productGroup of productGroups) {
            if (!productGroup.includes(product)) {
                foundAGroup = true;
                productGroup.push(product);
                if (productGroup.length === uniqueProductsCount) {
                    fullGroupIndex = productGroups.indexOf(productGroup);
                }
                break;
            }
        }
        if (!foundAGroup) {
            productGroups.push([product]);
        } else if (fullGroupIndex) {
           completeSets.push(...productGroups.splice(fullGroupIndex, fullGroupIndex + 1));
        }
    }
    return [...productGroups, ...completeSets];
}

function getUniqueProductsCount(productsArray) {
    let uniqueProducts = [];
    for (let product of availableProducts) {
        if (productsArray.indexOf(product) !== -1 && !uniqueProducts.includes(product)) {
            uniqueProducts.push(product);
        }
    }
    return uniqueProducts.length;
}

const availableProducts = ['A', 'B', 'C', 'D', 'E'];

const discountPercentage = {
    1: 1,
    2: .95,
    3: .90,
    4: .80,
    5: .75,
};