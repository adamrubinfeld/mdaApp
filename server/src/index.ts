import express from 'express';

import ambulanceRoute from './routes/AmbulanceRoute';
//import eventRoute from './routes/EventRoute';
//import personRoute from './routes/PersonRoute';
//import userRoute from './routes/UserRoute';

const app = express();


app.use('/ambulance', ambulanceRoute);
// app.use('/event', eventRoute);
// app.use('/person', personRoute);
// app.use('/user', userRoute);


app.listen(3000, () => console.log('server start at 3000'))