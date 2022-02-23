import { postAPI } from "..";
import { IUserInfo } from "../interface";

export const signIn = async ({
  userEmail,
  userPw,
}: {
  userEmail: string;
  userPw: string;
}): Promise<IUserInfo> => {
  try {
    return await postAPI("signInUser", { userEmail, userPw });
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
  userEmail,
  userNickname,
  userPw,
}: {
  userEmail: string;
  userNickname: string;
  userPw: string;
}): Promise<IUserInfo> => {
  try {
    return await postAPI("signUp", {
      userEmail,
      userNickname,
      userPw,
    });
  } catch (error: unknown) {
    console.log("===============> signUp Error", error);
    throw error;
  }
};
