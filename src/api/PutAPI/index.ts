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
  } catch (e) {
    console.log("===============> signUp Error", e);
    throw e;
  }
};
