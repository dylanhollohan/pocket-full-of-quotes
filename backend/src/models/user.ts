import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please include an email address'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
      type: String,
      required: [true, 'Please include a password'],
      minlength: [12, 'Password should have at least 12 characters']
    },
    username: {
      type: String,
      required: true,
    }
  },
  { 
    timestamps: true,
    statics: {
      async login(email, password) {
        const user = await this.findOne({ email });
        if (user) {
          const authorized = await bcrypt.compare(password, user.password);
          if (authorized) {
            return user;
          }
          throw Error('incorrect password')
        } 
        throw Error('no such email');
      } 
    }
   }
);

userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});



export const User = mongoose.model("User", userSchema);