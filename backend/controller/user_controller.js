//this is an api for handling signup
import bcrypt from "bcrypt";
import UserModel from "../model/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Token from "../model/token.js";
dotenv.config();

// *-*-*-*-**-*-*-*-*-*-*-*-*-***-*-*-*-*--

export const signupUser = async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    };

    const newUser = new UserModel(user);
    await newUser.save();
    console.log("User Signup Successfull");

    return response.status(200).json({ msg: "User Signup successful" });
  }
  catch (error) {
    console.log("Error:", error);
    return response.status(500).json({ msg: "Error while signing up the user" });
  }
};

// *-*-*-*-**-*-*-*-*-*-*-*-*-***-*-*-*-*--

export const loginUser = async (request, response) => {
  try {
    let user = await UserModel.findOne({ username: { $regex: new RegExp('^' + request.body.username + '$', 'i') } });

    if (!user) {
      return response.status(400).json({ msg: "Invalid credentials" });

    }

    try {
      let match = await bcrypt.compare(request.body.password, user.password);
      if (match) {

        console.log("User Identified....Login Successful");

        const accessToken = jwt.sign(
          user.toJSON(),
          process.env.ACCESS_SECRET_KEY,
          { expiresIn: "60m" }
        );
        const refreshToken = jwt.sign(
          user.toJSON(),
          process.env.REFRESH_SECRET_KEY
        );

        const newToken = new Token({ token: refreshToken });
        await newToken.save();

        return response.status(200).json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          name: user.name,
          username: user.username,
        });
      } else {
        return response.status(400).json({ msg: "Password does Not Match" });
      }
    } catch (error) { }
  } catch (error) {
    console.log("Error:", error);
    return response.status(500).json({ msg: "Error while Loging in the user" });
  }
};

export const checkUsername = async (request, response) => {
  const { username } = request.body;

  try {

    const user = await UserModel.findOne({ username });

    const exists = !!user;

    response.status(200).json({ isSuccess: !exists });
  } catch (error) {
    console.error('Error checking username:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};

export const logoutUser = async (request, response) => {
  const token = request.body.token;
  await Token.deleteOne({ token: token });

  response.status(204).json({ msg: 'logout successfull' });
}