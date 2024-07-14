import { SignJWT, jwtVerify } from "jose";
import { signIn } from "next-auth/react";
import { NextRequest } from "next/server";
// import { cookies } from 'next/headers'x

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export interface LoginData {
  username?: string;
  password?: string;
}

export const login = async (providerId: string, data: LoginData = {}) => {
  let success = true,
    error = "";
  try {
    const response = await signIn(providerId, {
      ...data,
      redirect: false,
    });
    console.log(response)
    if (response?.ok) {
      console.log("-- LOGIN SUCCESS!!", response);
      // custom actions on sucessful login

    } else if(providerId === "credentials") {
      console.log("-- LOGIN FAILED ", response);
      error = "Invalid username/password";
      success = false;
    }
  } catch (error) {
    console.log("-- LOGIN FAILURE :  ", error);
    error = "Unknown error occured, please try again.";
    success = false
  }
  return { success, error };
};


export const encrypt = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day")
    .sign(key);
};

export const decrypt = async (jwt: string = ""): Promise<any> => {
  const { payload } = await jwtVerify(jwt, key, { algorithms: ["HS256"] });
  return payload;
};
