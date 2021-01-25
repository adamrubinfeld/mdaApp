import mongoose , { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    firstName: String, 
    lastName: String, 
    _id: Number,
    password: Number,
    hours?: Number
}

const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    _id: {type: Number, required: true, unique: true},
    password: {type: Number, required: true}
})

export default mongoose.model<IUser>('User', UserSchema);