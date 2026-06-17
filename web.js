
const { Console } = require('console');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    // console.log(req);


    // 200 -> ok
    // 500 -> server error
    // 404 -> not found



    if (req.url == '/') {

        res.statusCode = 200;
        res.end('<h1> This is my firsr server </h1> <p> This is the second line of my online server </p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;    
        res.end('<h1> About of my  firsr server </h1> <p> This is specifically for my about </p>');
    }
    else{
            res.statusCode = 404;
         res.end('<h1> page not found  </h1> <p> This is specific server for this page </p>');
    
    }




});
server.listen(port, () => {
    console.log('server is listening on port ', port)
})