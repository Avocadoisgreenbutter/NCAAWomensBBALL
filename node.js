const express = require("express");
const axios = require("axios");

const app = express();

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get("https://ncaa-api.henrygd.me/standings/basketball-women/d1");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data.");
  }
});

app.listen(3000, () => {
  console.log("Proxy server running on http://localhost:3000");
});
