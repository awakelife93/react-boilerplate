import { postAPI } from "..";
import { UserInfoIE } from "./interface";

export const signIn = async ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  try {
    let result: UserInfoIE = await postAPI("auth/signIn", { id, password });
    return result;
  } catch (e) {
    console.log("===============> signIn Error", e);
  }
};
