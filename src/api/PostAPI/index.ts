import { postAPI } from "..";
import { IUserInfo } from "../interface";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IUserInfo> => {
  try {
    return await postAPI("signInUser", { email, password });
  } catch (error: unknown) {
    console.log("===============> signIn Error", error);
    throw error;
  }
};

export const signOut = async (): Promise<object> => {
  try {
    return await postAPI("signOut");
  } catch (error: unknown) {
    console.log("===============> signOut Error", error);
    throw error;
  }
};

export const signUp = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}): Promise<IUserInfo> => {
  try {
    return await postAPI("signUp", {
      email,
      name,
      password,
    });
  } catch (error: unknown) {
    console.log("===============> signUp Error", error);
    throw error;
  }
};
