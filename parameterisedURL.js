const http = require('http');
const PORT = 3000;

const friends = [
    {
        id:1,
        name: 'Ross Geller'
    },
    {
        id:2,
        name: 'Monica Geller'
    },
    {
        id:3,
        name: 'Chandler Bing'
    },
    {
        id:4,
        name: 'Phoebe Buffay'
    },
    {
        id:5,
        name: 'Rachel Greene'
    },
    {
        id:6,
        name: 'Joey Tribbiani'
    }
]

const server = http.createServer();

//can handle like events on servers
server.on('request',(req,res) =>
{
    const item = req.url.split('/');
    // item = ['','friends','2'];
    if(item[1] === "friends")
    {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    if(item.length == 3)    //if id also provided
    {
        const index = Number(item[2]);
        if(index<=(friends.length-1))   //if id provided is within range
        {
        res.write(JSON.stringify(friends[index]));
        res.end();
        }
        else{
            res.statusCode = 404;   //error if any id is out of range
            res.end();
        }
    }
    else{
    res.end(JSON.stringify(friends));   //can pass in end() too
    }
    }
else if(item[1] === "message")
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
});
server.listen(3000, () =>{
    console.log(`Server listening on ${PORT}`);
});