const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Get the requested URL
  const url = req.url;

  // Handle different routes
  if (url === '/') {
    // Respond with a simple HTML page for the root route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Welcome to the Home Page</h1></body></html>');
  } else if (url === '/api') {
    // Respond with a JSON object containing a greeting message for the /api route
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, this is the API route!' }));
  } else {
    // Respond with an error message and status code for any other route
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>404 Not Found</h1></body></html>');
  }
});

// Configure the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
