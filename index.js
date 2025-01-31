const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 4000
const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET, POST',
    allowedHeaders: ['Content-Type'],
  };

app.use(express.json());  // for parsing application/json
app.use(cors(corsOptions));



const HNG__EMAIL = "isaacsegun2055@gmail.com";
const GITHUB_REPO = "https://github.com/officiabreezy/HNG12-SIMPLE-API";

app.get('/', (req, res) => {
    res.json({
        email: HNG__EMAIL,
        current_datetime: new Date().toISOString(),
        github: GITHUB_REPO
    });
});
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = app;