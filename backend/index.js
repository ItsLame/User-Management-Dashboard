const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// db queries
app.post("/addUser", db.addUser);
app.put("/editUser", db.editUser);
app.delete("/deleteUser", db.deleteUser);
app.get("/getUsers", db.getUsers);

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
