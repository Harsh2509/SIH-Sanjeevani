import mongoose from "mongoose";
const Schema = mongoose.Schema;

function emailValidator(email: string): boolean {
  return /^[a-zA-Z0-9_\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z]{2,4}$/.test(email);
}

enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

enum Level {
  one = 1,
  two,
  three,
  four,
  five,
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: emailValidator,
        message: "Invalid Email passed to mongoose. (coming from UserSchema)",
      },
    },
    password: {
      type: String,
      minLength: 8,
      required: true,
    },
    gameScore: {
      type: Number,
      default: 0,
    },
    streak: {
      type: Number,
      default: 0,
    },
    dob: {
      type: Date,
    },
    guardian: [
      {
        relation: String,
        name: String,
        location: String,
        phoneNo: String,
        email: {
          type: String,
          validate: {
            validator: emailValidator,
            message:
              "Invalid Email passed to mongoose. (coming from UserSchema)",
          },
        },
      },
    ],
    gender: {
      type: String,
      enum: [Gender.male, Gender.female, Gender.other],
    },
    level: {
      type: Number,
      enum: [Level.one, Level.two, Level.three, Level.four, Level.five],
      default: Level.one,
    },
  },
  {
    timestamps: true,
  }
);

/** -------------------------------Game Schema---------------------------------------- */

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  description: {
    type: String,
    maxLength: 1000,
  },
  route: {
    type: String,
    required: true,
    maxLength: 200,
  },
  src: {
    type: String,
    required: true,
  },
  targets: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
