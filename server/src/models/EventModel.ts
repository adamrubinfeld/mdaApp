import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document{

}

const EventSchema = new Schema({

});

export default mongoose.model<IEvent>('Event', EventSchema);