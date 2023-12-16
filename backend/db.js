const Pool = require("pg").Pool;
const db = new Pool({
  user: "postgres",
  database: "umd",
  host: "localhost",
  port: 5432,
});

const getUsers = (req, res) => {
  const q = "SELECT * from users;";

  db.query(q, (err, results) => {
    if (err) {
      console.err(err.stack);
    }

    return res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { username, firstName, lastName } = req.body;
  const params = [username, firstName, lastName];
  const q =
    "INSERT INTO users(username, firstname, lastname) VALUES ($1,$2,$3)";

  db.query(q, params, (err, results) => {
    if (err) {
      console.error(err.stack);
    }

    return res.status(200).json({ message: "Add success" });
  });

  // res.json({ requestData: { uname, fname, lname } });
  // console.log(req.body); // FOR DEBUGGING
};

const editUser = (req, res) => {
  const { username } = req.body;
  const params = [username];
  const q = "SELECT * FROM users WHERE username=$1";

  db.query(q, params, (err, results) => {
    if (err) {
      console.error(err.stack);
    }

    return res.status(200).json({ message: "Edit success" });
  });
};

const deleteUser = (req, res) => {
  const { username } = req.body;
  const params = [username];
  const q = "DELETE FROM users WHERE username=$1";

  db.query(q, params, (err, results) => {
    if (err) {
      console.error(err.stack);
    }

    return res.status(200).json({ message: "Delete success." });
  });
};

module.exports = {
  getUsers,
  addUser,
  editUser,
  deleteUser,
};
