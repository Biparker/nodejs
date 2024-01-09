const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});


app.get('/fetch-secret', async (req, res) => {
    axios.get('http://nodejs.railway.internal:3000/secret')
    .then(response => {
        res.json(response.data);
    })
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
