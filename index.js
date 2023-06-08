const http = require('http');
const PORT = 3000;

const server = http.createServer((req,res) => {
    if(req.url === "/friends")
    {
    //res.writeHead(200, {                    //to write some Headers to the response
        //'Content-Type':"text/plain",
      //  'Content-Type':"application/json"
    //});
//Another way to write
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    //expects a String
    res.end(JSON.stringify({
        name:'Sir Isaac Newton',
        role: 'friend',
        id:1
    }));
    //res.end("Hello! Your request has been completed.");     //used to mark a request processing end on server side. Mandatory for each request, empty ones as well
}
else if(req.url === "/message")
{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Isaac!</li>');
    res.write('<li>How was the apple?</li');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}
else
{
    res.statusCode = 404;
    res.end();
}
}
);
//127.0.0.1 =>localhost by default
server.listen(3000, () =>{
    console.log(`Server listening on ${PORT}`);
});