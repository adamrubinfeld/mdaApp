import mongoose , { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    _id: Number,
    firstName: String, 
    lastName: String, 
    password: Number,
    hours?: Number
}

const UserSchema = new Schema({
    _id: {type: Number, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: Number, required: true},
    hours: {type: Number}
})

export default mongoose.model<IUser>('User', UserSchema);