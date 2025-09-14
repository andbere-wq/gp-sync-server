const express = require("express");
const app = express();
app.use(express.json());

let ultimoEvento = null;

app.post("/evento", (req, res) => {
  ultimoEvento = req.body;
  res.sendStatus(200);
});

app.get("/ultimo-evento", (req, res) => {
  res.json(ultimoEvento || {});
});

app.get("/", (req, res) => {
  res.send("Servidor GPS activo");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor activo");
});
