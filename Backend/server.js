require('dotenv').config()
const express = require('express');
const cors = require('cors')
const dbConnect = require('./config/dbConnect')
const app = express();


app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//routes
const venueRouter = require('./Routes/venueRoutes')
const categoryRouter = require('./Routes/categoryRoutes')
const userRoutes = require('./Routes/userRoutes');


app.use(express.json());

dbConnect()

app.use('/api/venue', venueRouter)
app.use('/api/category',categoryRouter)
app.use('/api/users',userRoutes);

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});