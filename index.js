import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import morgan from "morgan";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Server Working");
});
app.get("/user/:username", (req, res) => {
  const { username } = req.params;
  if (!username) return res.status(400).send("You must provide an username");
  axios
    .get(`https://bio.torre.co/api/bios/${username}`)
    .then((e) => {
      res.json(e.data);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});
app.get("/job/:idUser/:idJob", (req, res) => {
  const { idUser, idJob } = req.params;
  if (!idUser || !idJob)
    return res
      .status(400)
      .send("You must provide ids from the user and the job");
  axios
    .get(`https://torre.co/api/genome/bios/${idUser}/jobs/${idJob}`)
    .then((e) => {
      res.json(e.data);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server listening at", port);
});
