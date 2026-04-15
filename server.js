import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

// Serve /base folder like a web root
app.use("/base", express.static(path.join(process.cwd(), "base")));

app.get("/", (req, res) => {
  res.send("AO Asset Server Running");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
