import { Schema, model, models, SchemaTypes } from "mongoose";
import validator from "mongoose-unique-validator";
const UserSchema = new Schema({
  username: { type: String },
  activities: [{ type: SchemaTypes.ObjectId, ref: "Activities" }],
});
UserSchema.plugin(validator, { message: "El {PATH} debería ser único" });
export default models.User || model("User", UserSchema);
