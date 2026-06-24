
const express = require('express')
const app = express()
const PORT = 3000;

app.use((req,res,next)=>{
    console.log("chal aya bhai chal  ");
    next();
})
app.get('/', (req, res,next) => {


  return next(new Error('Something is broke!'));
})


// error handler
app.use((error,req,res,next)=>{
    console.error(error.stack);
    res.status(500).send('Something went wrong!');
  
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})