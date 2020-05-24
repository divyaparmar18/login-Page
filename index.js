const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/login',express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.send('my app');
    
});

app.post('/login',(req,res)=>{
    console.log(req.body);
    //do some database process;
    res.redirect('/')
});

app.listen(3000,()=>{
    console.log('you server is running ar port 3000');
    
})

