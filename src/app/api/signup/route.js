import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../../dbconnect/dbConnect";
import Data from "@/modals/dbSchema";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(NextRequest) {
  await dbConnect();
  try {
    console.log("inside try");

    const { name, gender, email, password, val } = await NextRequest.json();
    const userExist = await Data.findOne({ email });
    if (userExist) {
      console.log("user exist");

      return NextResponse.json(
        {
          success: false,
          message: "User already exist please login",
        },
        { status: 400 }
      );
    }
    const hashedpassword = await bcryptjs.hash(password, 10);
    const response = await Data.create({
      name,
      gender,
      email,
      password: hashedpassword,
    });
    console.log("data created");
    // console.log(response);

    const userdata = {
      id: response._id,
      name: response.name,
      email: response.email,
    };
    console.log(userdata);

    const token = await jwt.sign(userdata, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    console.log(token, "token created");

    const responseMessage = NextResponse.json({
      success: true,
      message: "signup successfully",
    });

    responseMessage.cookies.set("token", token, {
      httpOnly: true,
    });
    return responseMessage;
  } catch (error) {
    console.log(error, "error in catch");

    return NextResponse.json({
      success: false,
      message: "error doing signup",
    });
  }
}
