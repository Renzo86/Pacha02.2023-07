import {Schema, model} from 'mongoose';

const UserSchema = Schema({
    nombre: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    isOnline: {
        type: Boolean,
        default: false,
    }
})

UserSchema.method('toJson', function() {
    const {__v, _id, password, ...object} = this.toObject();
    object.uid = _id;
    return object;
})

export default model('users', UserSchema);