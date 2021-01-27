const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const products = require('./db');
const fs =require('fs');
const { sort } = require('./db');
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
  
  const pNum = (typeof req.params.pages !== 'undefined')?req.params.pages:1;
 console.log(pNum)
  const startPoint = pSize*(pNum-1);
  const endPoint = startPoint+pSize;

  console.log(startPoint+" and "+ endPoint)

  const category = req.params.category;

  const pMax = req.params.Max;

  const pMin = req.params.Min;

  const productsFiltered = products.filter(prod =>
    prod.category == category && parseInt(prod.price) < pMax && parseInt(prod.price) > pMin).slice(startPoint, endPoint-1);

  res.send(productsFiltered);
});


/******************** End of endpoint function for search products based on category & price range **************/

//End point to get Product in the category & price range similar to the one mentioned in search id 
app.get('/similarProducts/:id', function (req, res) {
  const nearestNumber = 11;

  const id = req.params.id;
  const Product = products.filter(p => p.id === id)[0];   //search product based on its id
  console.log(Product)
  const sortProducts = products
    .filter(prod => prod.category == Product.category)
    .sort((a, b) => a.price- b.price);                  //Sort similar products based on category
  
    console.log(sortProducts)

    //To find maximum number of products that are to be displayed 
  const numberOfProducts = (nearestNumber < sortProducts.length) ? nearestNumber : sortProducts.length;
 console.log("total products= "+numberOfProducts)  

 function findByKey(key, value) {
  return (item, i) => item[key] === value
}

let findParams = findByKey('id', Product.id)
  
    let index =sortProducts.findIndex(findParams)

    console.log(index)

    const startIndex=index-Math.ceil(numberOfProducts/2)
    const endIndex =index+Math.floor(numberOfProducts/2)

    console.log(startIndex +" and "+ endIndex)

     let similarProducts = [];

    for(var i=startIndex;i<=endIndex;i++)
    {
        if(i==index)
        continue;
        similarProducts.push(sortProducts[i])
    }

   
  res.send(similarProducts);
});


/*******************End of endpoint similar proruct search******************/

process.on('SIGINT', function () {
  process.exit();
});

