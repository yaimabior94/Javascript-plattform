const express = require("express");
const { PrismaClient } = require("@prisma/client");
const path = require("path");

const app = express();
const prisma = new PrismaClient();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Handle form submit
app.post("/submit", async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await prisma.user.create({
      data: { name, email },
    });

    res.send(`User created successfully!<br>ID = ${user.id}`);
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

app.listen(3000, () =>
  console.log("Server running → http://localhost:3000/form.html")
);
