const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res) => {
    res.writeHead(200, {                    //to write some Headers to the response
        'Content-Type':"text/plain",
    });
    res.end("Hello! Your request has been completed.");     //used to mark a request processing end on server side. Mandatory for each request, empty ones as well
});

//127.0.0.1 =>localhost by default
server.listen(3000, () =>{
    console.log(`Server listening on ${PORT}`);
});