const Product = require("../model/Product.js");


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const ListProduct = async (req,res) =>{
   try{
      const product = await Product.find({});
      res.status(200).send(product);
   
   }catch(err){
       console.log(err);
       res.status(500).send("ERROR");
   }
}
const CreateProduct = async (req,res) =>{
    try{
        const {name,price,imgURL,number} = req.body;
        const product = new Product({
            name,
            price:parseInt(price),
            productID:makeid(10),
            imgURL,
            number,
        })
     await product.save();
     res.status(200).json({"result":"Success"});
     }catch(err){
        console.log(err);
        res.status(500).send("ERROR");
     }

}
const FindProductById = async(req,res) => {
      try{
        const {id} = req.query;
        const product = await Product.findOne({productID:id});
        if(!product){
            return res.status(404).send("Can't find product");
        }
        res.status(200).send(product);

      }catch(err){
         console.log(err);
         res.status(500).send("Critical Error");
      }
     
}
const UpdateProduct = async(req,res) => {
    try{
        const {name,price,productID,number} = req.body;
        const product = await Product.findOne({productID});
        if(!product) {
            return res.status(404).send("Can't find Product");
        }
     product.name = name;
     product.price = parseInt(price);
     product.number = parseInt(number);
     await product.save();
     res.status(200).json({"result":"Success"});

    }catch(err){
        console.log(err);
        res.status(500).send("Critical Error");

    }
}
const DeleteProduct = async(req,res) => {
    try{
        const {id} = req.body
        await Product.deleteOne({productID:id});
        res.status(200).send("Success");

    }catch(err){
        console.log(err);
        res.status(500).send("Critical Error")
    }
}
   

module.exports = {ListProduct,CreateProduct,FindProductById,UpdateProduct,DeleteProduct};