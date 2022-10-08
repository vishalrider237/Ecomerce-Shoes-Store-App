
const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const path=require('path')
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
dotenv.config()
const md5=require('md5')
const staticPath=path.join(__dirname,"./public")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(staticPath))
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://vishalrider237:vishal9743@cluster0.dcgfxjj.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to mongodb")
}).catch(err=>{
    console.log(err)
})

const productSchema=new mongoose.Schema({
    Name:String,
    PhoneNumber:Number,
    Address:String,
    CardNumber:String,
    month:Number,
    year:Number,
    Cvv:String
})
const Product=new mongoose.model("Product",productSchema);
const Pro=Product.find({})
/*  app.post('/',async(req,res)=>{
      var prDeta=await Product.create({
        name:req.body.Name,
        phoneNumber:req.body.PhoneNumber,
        Address:req.body.Address,
        cardNumber:req.body.password,
        mm:req.body.month,
        yy:req.body.year,
        cvv:req.body.Cvv
    });
    prDeta.save(function(err,req1){
        if(err){
            throw err;
        }  
        Pro.exec(function(err,data){
            if(err){
                throw err;
            }
            res.render('index',{title:"Payment Record",records:data,sucess:"Record inserted successfully"})
        })
    
    }) 
    
}) */

app.post("/", (req, res) => {
    var myData= new Product({
        Name:req.body.Name,
        PhoneNumber:req.body.PhoneNumber,
        Address:req.body.Address,
        CardNumber:md5(req.body.CardNumber),
        month:req.body.month,
        year:req.body.year,
        Cvv:md5(req.body.Cvv)
});
    myData.save().then(item => {
        res.send("<h1 align=center color='green'>Payment Success✅</h1>");
      }).catch(err => {
        res.status(400).send("<h1 align=center>Payment Failed❎</h1>");
      });
  });

/*app.post("/", (req, res) => {
    var myData = new Product(req.body);
    myData.save().then(item => {
        res.send("<h1>THANKU!!</h1>");
      }).catch(err => {
        res.status(400).send("unable to save to database");
      });
  });*/
  
const port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log('server is running on port 3000')
})