const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 4000
const app = express();

const corsOptions = {
    origin: '*',
  };

app.use(express.json()); 
app.use(cors(corsOptions));



const HNG__EMAIL = "isaacsegun2055@gmail.com";
const GITHUB_REPO = "https://github.com/officiabreezy/HNG12-SIMPLE-API";

app.get('/', (req, res) => {
    res.json({
        email: HNG__EMAIL,
        current_datetime: new Date().toISOString(),
        github_url: GITHUB_REPO
    });
});
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = app;