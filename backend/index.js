const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use('/api' , require('./routes/routes'));


app.listen(port , (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('server is lisling on http://locahost:8000');
    }
});
