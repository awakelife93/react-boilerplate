import { postAPI } from "..";
import { UserInfoIE } from "./interface";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    let result: UserInfoIE = await postAPI("signIn", { email, password });
    return result;
  } catch (e) {
    console.log("===============> signIn Error", e);
    throw e;
  }
};

export const signUp = async ({
  email,
  nickname,
  password,
}: {
  email: string;
  nickname: string;
  password: string;
}) => {
  try {
    let result: UserInfoIE = await postAPI("signUp", {
      email,
      nickname,
      password,
    });
    return result;
  } catch (e) {
    console.log("===============> signUp Error", e);
    throw e;
  }
};

export const signOut = async ({ email }: { email: string }) => {
  try {
    let result: object = await postAPI("signOut", { email });
    return result;
  } catch (e) {
    console.log("===============> signOut Error", e);
    throw e;
  }
};
