import mongoose , { Schema, Document } from 'mongoose';
import shortID from 'shortid';

export enum Job{
    Driver,
    GivingFirstAid,
    Medic,
    Paramedic
}

export interface IUser extends Document {
    _id: String,
    firstName: String, 
    lastName: String,
    job: Job, 
    password: Number,
    hours?: Number
}

const UserSchema = new Schema({
    _id: {type: Number, required: true, unique: true, default: shortID.generate()},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    job: {type: Job, required: true},
    password: {type: Number, required: true},
    hours: {type: Number}
})

export default mongoose.model<IUser>('User', UserSchema);