require('dotenv').config()
const express = require('express');
const dbConnect = require('./config/dbConnect')
const app = express();

//routes
const venueRouter = require('./Routes/venueRoutes')
const userRoutes = require('./Routes/userRoutes');

dbConnect()

app.use(express.json());

app.use('/api/venue', venueRouter)
app.use('/api/users',userRoutes);

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});