import express from 'express';
import products from './proudcts';
console.log(products);
const app = express();


app.get('/products', (req, res) => {
    res.json(products);

});

app.listen(3000, () => {
    console.log('server is running');

});




