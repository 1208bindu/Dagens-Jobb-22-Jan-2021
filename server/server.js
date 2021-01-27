const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const products = require('./db');
const fs =require('fs')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

http.createServer(app).listen(3001, () => {
  console.log('Listen on 0.0.0.0:3001');
});

app.get('/', (_, res) => {
  res.send({ status: 200 });
});

//End point to display specific product details based on its id
app.get('/search/:id',function(req,res){
  const id=req.params.id;
  const searchedProduct=products.filter(p=>p.id===id)[0]
  res.send(searchedProduct)
})
/**********end of  display specific product details endpoint*/





// End point to add new products

const WriteTextToFileAsync = async (contentToWrite) => {
  fs.writeFile('./db.js', 'const products = ' + JSON.stringify(contentToWrite,null,2) + '; module.exports=products;', (err) => {
    console.log(contentToWrite);
    if(err) {
      console.log(err);
    } 
    })
}

app.post('/addProduct',async (req, res, next) => {
  // take the body from incoming request by using req.body and convert it into string
  const requestContent = req.body;
  let newContent=[...products, requestContent]
  await WriteTextToFileAsync(newContent)
  res.send(newContent)
});

/*****  End of addnew products endpoint ********/


//End Point to list products based on category & price range between maximum Price & minimum Price  
app.get('/searchProducts/:category/price-between-:Max-and-:Min/:pages?', function (req, res) {
  const pSize = 24;
  const pNum = (typeof req.params.pages === 'undefined')?req.params.pages:0;
  const startPoint = pSize*pNum;
  const endPoint = startPoint+pSize;

  const category = req.params.category;

  const pMax = req.params.Max;

  const pMin = req.params.Min;

  const productsFiltered = products.filter(prod =>
    prod.category == category && parseInt(prod.price) < pMax && parseInt(prod.price) > pMin).slice(startPoint, endPoint);

  res.send(productsFiltered);
});


/******************** End of endpoint function for search products based on category & price range **************/

//End point to get Product in the category & price range similar to the one mentioned in search id 
app.get('/similarProducts/:id', function (req, res) {
  const nearestNumber = 10;
  const t=[]
  const id = req.params.id;
  const Product = products.filter(p => p.id === id)[0];   //search product based on its id
  const sortProducts = products
    .filter(prod => prod.category == Product.category && prod.id !== Product.id)
    .sort((a, b) => a.price- b.price);                  //Sort similar products based on category
  
    //To find maximum number of products that are to be displayed 
  const numberOfProducts = (nearestNumber < sortProducts.length) ? nearestNumber : sortProducts.length;
  

  //Finding closest similar product in the price range
  const similar = function(price, prod) {
    let currentProduct = prod[0];
   
    let diff = Math.abs(price - currentProduct.price);
    let index = prod.length;
    while(index--) {
      const nDiff = Math.abs(price - prod[index].price);
      if(nDiff < diff) {
        diff = nDiff;
        currentProduct = prod[index];
       }
    }
    return currentProduct;
  };


  //Adding the similar products in an array for displaying at end point
  const addSimilarProducts = function(filtered, number) {
    let displayProd = [];
    let prod = filtered;
    while (displayProd.length < number) {
      let item = similar(Product.price, prod);
      prod.splice(item['prod'], 1);
      delete item['prod'];
      displayProd.push(item);
    }
    return displayProd;
  }

  const similarProducts = addSimilarProducts(sortProducts, numberOfProducts);
  res.send(similarProducts);
});


/*******************End of endpoint similar proruct search******************/

process.on('SIGINT', function () {
  process.exit();
});

