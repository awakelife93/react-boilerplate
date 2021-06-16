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
  }
};
