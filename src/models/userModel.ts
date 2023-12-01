import { Schema, model } from "mongoose";

const userShema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  privilege: {
    type: String,
    enum: ["ADMIN", "SUPER", "USER"],
    default: "ADMIN",
  },
});

const UserModel = model("User", userShema);

export default UserModel;
