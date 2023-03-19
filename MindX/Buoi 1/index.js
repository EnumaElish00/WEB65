const fs = require('fs')
const http = require('http')
const url = require("url")
const { findMax, findMinWomen } = require('./productService')
const products = [
    { id: 1, name: 'Apple', price: 1000, type: 'fruit', amount: 10 },
    { id: 2, name: 'Pineapple', price: 1500, type: 'fruit', amount: 100 },
    { id: 3, name: 'Pork', price: 10500, type: 'meat', amount: 20 },
    { id: 4, name: 'Coke', price: 2500, type: 'drink', amount: 50 },
    { id: 5, name: 'Vodka', price: 4500, type: 'drink', amount: 90 },
]

fs.writeFile('products.json', JSON.stringify(products), () => { console.log('done') })


const serverListener = (req, res) => {

    switch (req.url) {
        case "/": {
            res.end('LESSION-1: ');
            break;
        }
        case "/api/products": {
            const prodData = fs.readFileSync("./products.json", "utf-8");
            res.end(prodData);
            break;
        }
        case "/api/products/getMaxPrice": {
            const prodData = fs.readFileSync("./products.json", "utf-8");
            const getMaxPrice = findMax(JSON.parse(prodData));
            res.end(JSON.stringify(getMaxPrice));
            break;
        }
        case "/api/products/getMinPriceWomen": {
            const prodData = fs.readFileSync("./products.json", "utf-8");
            const getMinPriceWomen = findMinWomen(JSON.parse(prodData));
            res.end(JSON.stringify(getMinPriceWomen));
            break;
        }
        default:
            break;
    }
};

const server = http.createServer(serverListener);

server.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});