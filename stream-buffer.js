const http = require('http');
const fs = require('fs')

// creating a server using raw node.js
const server = http.createServer();

// listening
server.on("request", (req, res) => {
    // console.log(req.url, req.method);
    if (req.url === "/read-file" && req.method === "GET");

    // creating reading stream 
    // const readableStream = fs.createReadStream('./text/read.txt') // or
    // const readableStream = fs.createReadStream(__dirname + '/text/read.txt') // or
    const readableStream = fs.createReadStream(process.cwd() + '/text/read.txt');

    readableStream.on('data', (buffer) => {
        res.write(buffer)
    })

    readableStream.on('end', () => {
        res.end(`Hello from node`)
    })

})

server.listen(5000, () => {
    console.log(`Server running on port 5000`);
})