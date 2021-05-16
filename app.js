const express=require("express")
const bodyparser=require("body-parser")

const app=express();

app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended: true}));
var items=[];
app.get("/",function(req,res){
    res.render("index",{arr:items});
})
app.post("/",function(req,res){
    if(req.body.sub=="add"){
    items.push(req.body.item);
    }
    else{
        items.splice(Number(req.body.item_no)-1,Number(req.body.item_no));
    }
    res.redirect("/");
})
app.listen(process.env.PORT || 3000,function(){
    console.log("Server Started in port 3000");
});