const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');

let quotes =[];
app.get('/', (req,res)=> {
    res.render("index");
});

app.post('/quote', (req,res)=> {
   const { quote } = req.body;
   if(quote) {
    quotes.push(quote);
   }
   res.redirect('/quote');
});

app.get('/quote', (req,res)=> {
    res.render("quote",{quotes});
});

app.listen(3000,()=> {
    console.log("server is running on port 3000");

});