import { putAPI } from "..";
import { UserInfoIE } from "../interface";

export const signUp = async ({
  userEmail,
  userNickname,
  userPw,
}: {
  userEmail: string;
  userNickname: string;
  userPw: string;
}): Promise<UserInfoIE> => {
  try {
    return await putAPI("signUp", {
      userEmail,
      userNickname,
      userPw,
    });
  } catch (error: unknown) {
    console.log("===============> signUp Error", error);
    throw error;
  }
};
