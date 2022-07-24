import { Schema, model, models } from "mongoose";
import validator from "mongoose-unique-validator";
const ActivitiesSchema = new Schema(
  {
    name: { type: String },
    icon: { type: String },
    color: { type: String },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
ActivitiesSchema.plugin(validator, { message: "El {PATH} debería ser único" });
export default models.Activities || model("Activities", ActivitiesSchema);
