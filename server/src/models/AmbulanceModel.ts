import mongoose , { Schema, Document } from 'mongoose';

import { IUser } from './UserModel';
import { IEvent } from './EventModel';

enum Region{

}

export interface IAmbulance extends Document{
    _id: String;
    region: Region;
    crew: IUser['_id'][];
    events: IEvent['_id'][];
}

const AmbulnaceSchema = new Schema({
    _id: {type: String, required: true, unique: true},
    region: {type: Region, required: true},
    crew: {type: [Schema.Types.ObjectId]},
    events: {type: [Schema.Types.ObjectId]}
})

export default mongoose.model<IUser>('Ambulnace', AmbulnaceSchema);