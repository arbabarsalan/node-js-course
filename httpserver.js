const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // console.log(req);


    // 200 -> ok
    // 500 -> server error
    // 404 -> not found

    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is my firsr server </h1> <p> This is the second line of my online server </p>');
});
server.listen(port, () => {
    console.log('server is listening on port ', port)
})