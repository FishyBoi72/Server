const http = require('http');

// Creates an HTTP server
const server = http.createServer((req, res) => {
  // Gets the requested URL
  const url = req.url;

  // Handles different routes
  if (url === '/') {
    // Responds with a simple HTML page for the root route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Welcome to the Home Page</h1></body></html>');
  } else if (url === '/api') {
    // Responds with a JSON object containing a greeting message for the /api route
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, this is the API route!' }));
  } else {
    // Responds with an error message and status code for any other route
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>404 Not Found</h1></body></html>');
  }
});

// Configures the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
