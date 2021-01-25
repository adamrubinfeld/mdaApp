import express from 'express';
import mongoose from 'mongoose';

import ambulanceRoute from './routes/AmbulanceRoute';
import eventRoute from './routes/EventRoute';
import personRoute from './routes/PersonRoute';
import userRoute from './routes/UserRoute'; 

const app = express();

app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/MDA',{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open',() => console.log('connected to db'));


app.use('/ambulance', ambulanceRoute);
app.use('/event', eventRoute);
app.use('/person', personRoute);
app.use('/user', userRoute);


app.listen(3000, () => console.log('server start at 3000'))