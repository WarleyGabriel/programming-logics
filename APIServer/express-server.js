const express = require("express");
const app = express();
const port = 3000;
const usersApi = require("./axios-request");

app.get("/users", async (req, res) => {
  const users = await usersApi.main(req.query.name);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// curl --location --request GET 'http://localhost:3000/users?name=fulano'
