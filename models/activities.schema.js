import { Schema, model, models } from 'mongoose';
import validator from 'mongoose-unique-validator';
const ActivitiesSchema = new Schema({
	activities: { type: [String] },
});
ActivitiesSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default models.Activities || model('Activities', ActivitiesSchema);

