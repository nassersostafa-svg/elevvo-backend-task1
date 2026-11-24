const http = require("http");
const os = require("os");

const users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Sara" },
];

function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    return sendJson(res, 200, { message: "Hello from raw Node.js server" });
  }
  if (req.method === "GET" && req.url === "/api/users") {
    return sendJson(res, 200, users);
  }
  if (req.method === "GET" && req.url === "/api/health") {
    return sendJson(res, 200, {
      uptime: process.uptime(),
      platform: os.platform(),
      timestamp: new Date().toISOString(),
    });
  }
  sendJson(res, 404, { error: "Not found" });
});

server.listen(3000, () => console.log("Server running on http://localhost:3000"));