const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Create a MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "davyd",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed: " + err.message);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Parse JSON in request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Create a new To-Do
app.post("/api/todos", (req, res) => {
  const { nome, telefone, morada } = req.body;
  const query = "INSERT INTO members (name, telefone, morada) VALUES (?, ?, ?)";
  db.query(query, [nome, telefone, morada], (err, result) => {
    if (err) {
      console.error("Error creating To-Do:", err);
      res.status(500).send("Error creating To-Do");
    } else {
      const novoMembro = {
        id: result.insertId,
        name: nome,
        telefone: telefone,
        morada: morada,
      };
      res.json(novoMembro);
      // console.log('Members added successfuly:',{name, telefone, morada})
      // res.status(201).send('To-Do created successfully');
    }
  });
});
// Read all To-Do items
app.get("/api/todos", (req, res) => {
  const query = "SELECT * FROM members";
  db.query(query, (err, rows) => {
    if (err) {
      console.error("Error fetching To-Do items:", err);
      res.status(500).send("Error fetching To-Do items");
    } else {
      res.json(rows);
    }
  });
});

// Delete a To-Do item
app.delete("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM members WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting To-Do:", err);
      res.status(500).send("Error deleting To-Do");
    } else {
      res.send("To-Do deleted successfully");
    }
  });
});

// Update a To-Do item
app.put("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  const { name, telefone, morada } = req.body;
  // console.log("Dados recebidos para a atualização:", { id, nome, telefone, morada });
  const query = "UPDATE members SET name = ?, telefone = ?, morada = ? WHERE id = ?";
  db.query(query, [name, telefone, morada, id], (err, result) => {
    if (err) {
      console.error("Error updating member:", err);
      res.status(500).send("Error updating member");
    } else {
      res.send("Member updated successfully");
    }
  });
});
