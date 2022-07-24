import { Schema, model, models } from 'mongoose';
import validator from 'mongoose-unique-validator';
const UserSchema = new Schema({
	User: { type: String },
});
UserSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default models.User || model('User', UserSchema);

