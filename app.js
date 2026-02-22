const https = require("https");
const http = require("http")
const fs = require("fs");



https
  .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      console.log(JSON.parse(data));
    });

fs.writeFile("file.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("File saved!");
});


fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
