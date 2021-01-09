import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:2707/test', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongodb read to connect'));

app.listen(3000, () => console.log('server start at 3000'))