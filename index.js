const express = require('express');

const app = express();

//Set UP Middleware and Routes
app.use(express.json());

//port
const PORT = process.env.PORT || 2090

app.listen(PORT,()=>{
    console.log("Serve is listening to port " + PORT);
})