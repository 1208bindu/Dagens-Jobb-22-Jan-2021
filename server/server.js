const express = require('express');
const util=require('util')
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
app.get('/searchProducts/:category/price-:pMax-:pMin/:pages?', function (req, res) {
  const pSize = 24;
  const pNum = (typeof req.params.pages === 'undefined')?req.params.pages:0;
  const startPoint = pSize*pNum;
  const endPoint = startPoint+pSize;

  const category = req.params.category;

  const pMax = req.params.pMax;

  const pMin = req.params.pMin;

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

// const express = require('express');
// const http = require('http');
// const bodyParser = require('body-parser');
// const app = express();
// const cors = require('cors')
// const products = require('./db.js');

// const fs =require('fs');

// console.log(products)


// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// fs.readFile('./db.js', 'utf8', (err, data) => {

//   if (err) {
//       console.log(`Error reading file from disk: ${err}`);
//   } else {

//       // parse JSON string to JSON object
     
//      // console.log(data)
//       // // print all databases
//       // databases.forEach(db => {
//       //     console.log(`${db.name}: ${db.type}`);
//       // });
//   }

// });

// http.createServer(app).listen(3001, () => {
//   console.log('Listen on 0.0.0.0:3001');
// });


// app.get('/', (_, res) => {
//   res.send({ status: 200 });
// });

// app.post('/product', function (req, res) {
//   console.log("aa")
//   console.log(req.body);
//   products.push(req.body);
//   res.send(req.body);
// })

// // app.get('/products/:category/price-:priceMax-:priceMin/:page?', function (req, res) {
// //   const pageSize = 24;
// //   const pageNum = req.params.page ?? 0;
// //   const pStart = pageSize*pageNum;
// //   const pEnd = pStart+pageSize;

// //   const category = req.params.category;
// //   const priceMax = req.params.priceMax;
// //   const priceMin = req.params.priceMin ?? 0;

// //   const produce = products.filter(p =>
// //     p.category == category &&
// //     p.price < priceMax &&
// //     p.price > priceMin
// //   ).slice(pStart, pEnd);

// //   console.log(priceMax);

// //   res.send(produce);
// // });

// app.get('/similarProduct/:id', function (req, res) {
//   const numNearest = 1;
//   const id = req.params.id;
//   const searchedProduct = products.filter(p => p.id === id)[0];
//   const sortProducts = products
//     .filter(p => p.category == searchedProduct.category && p.id !== searchedProduct.id)
//     .sort((a, b) => a.price- b.price);
  
//   const findClosest = goal => (a,b) => Math.abs(a.price - goal) < Math.abs(b.price - goal) ? a : b;
//   const closestProduct = sortProducts.reduce(findClosest(searchedProduct.price));

//   res.send(closestProduct);
// });

// app.get('/similarProducts/:id', function (req, res) {
//   const numNearest = 5;
//   const id = req.params.id;
//   const searchedProduct = products.filter(p => p.id === id)[0];
//   const sortProducts = products
//     .filter(p => p.category == searchedProduct.category && p.id !== searchedProduct.id)
//     .sort((a, b) => a.price- b.price);
  
//   const searchMax = (numNearest < sortProducts.length) ? numNearest : sortProducts.length;
//   const temp = [];

//   const closest = function(price, array) {
//     let current = array[0];
//     current['arr'] = 0;
//     let diff = Math.abs(price - current.price);
//     let index = array.length;
//     while(index--) {
//       const nDiff = Math.abs(price - array[index].price);
//       if(nDiff < diff) {
//         diff = nDiff;
//         current = array[index];
//         current['arr'] = index;
//       }
//     }
//     return current;
//   };

//   const addCloseProducts = function(array, number) {
//     let out = [];
//     let arr = array;
//     while (out.length < number) {
//       let item = closest(searchedProduct.price, arr);
//       arr.splice(item['arr'], 1);
//       delete item['arr'];
//       out.push(item);
//     }
//     return out;
//   }

//   const nClose = addCloseProducts(sortProducts, searchMax);
//   res.send(nClose);
// });


// process.on('SIGINT', function () {
//   process.exit();
// });