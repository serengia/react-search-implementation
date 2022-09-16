import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { query } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  if (query) {
    res.status(200).json(search(Users).slice(0, 10));
  } else {
    res.json(Users.slice(0, 10));
  }
});

app.listen(8000, () => console.log("Server running on port 8000!"));
