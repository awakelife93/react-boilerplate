import { postAPI } from "..";
import { UserInfoType } from "../type";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserInfoType> => {
  try {
    return await postAPI("auth/signIn", {
      role: "user",
      email,
      password,
    });
  } catch (error: unknown) {
    console.log("===============> signIn Error", error);
    throw error;
  }
};

export const signOut = async (): Promise<object> => {
  try {
    return await postAPI("auth/signOut");
  } catch (error: unknown) {
    console.log("===============> signOut Error", error);
    throw error;
  }
};

export const createUser = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}): Promise<UserInfoType> => {
  try {
    return await postAPI("users", {
      email,
      name,
      password,
      role: "user",
    });
  } catch (error: unknown) {
    console.log("===============> createUser Error", error);
    throw error;
  }
};
