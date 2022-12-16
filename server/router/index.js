
const express = require('express');
const productsRoute = require('./product');
const cors = require("cors")

function route(app) {
   
   app.use('/api/product',productsRoute);
   


   /*goi den homepageroute , homepageroute se xuat ra 1 router */

}

module.exports = route;