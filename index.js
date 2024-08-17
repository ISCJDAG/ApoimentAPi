const express = require('express');

const app = express();

const userRoutes = require('./router/usersRoutes');

//Set UP Middleware and Routes
app.use(express.json());
app.use(userRoutes);

//port
const PORT = process.env.PORT || 2090

app.listen(PORT,()=>{
    console.log("Serve is listening to port " + PORT);
})