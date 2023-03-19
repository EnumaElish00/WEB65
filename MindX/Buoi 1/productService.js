function findMax(prod) {
    prod.sort((a, b) => b.price - a.price)
    return prod[0]
}

function findMinWomen(prod) {
    const womenType = prod.filter((item) => item.type === 'women')
    womenType.sort((a, b) => a.price - b.price)
    return womenType[0]
}

module.exports = {
    findMax,
    findMinWomen
}