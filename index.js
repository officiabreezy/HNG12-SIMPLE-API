const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000

const HNG__EMAIL = "isaacsegun2055@gmail.com";
const GITHUB_REPO = "https://github.com/officiabreezy/HNG12-SIMPLE-API";

app.get('/', (req, res) => {
    res.json({
        email: HNG__EMAIL,
        current_datetime: new Date().toISOString(),
        github: GITHUB_REPO
    });
});
  

module.exports = app;