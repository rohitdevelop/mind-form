const http = require("http");
const app = require("./app");
const env = require("./config/env");

const server = http.createServer(app);
const PORT = env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
