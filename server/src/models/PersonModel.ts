import mongoose, { Schema, Document } from 'mongoose';

export interface IPreson extends Document{

}

const PersonSchema = new Schema({

});

export default mongoose.model<IPreson>('Event', PersonSchema);