import { postAPI } from "..";
import { UserInfoIE } from "./interface";

export const login = async ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  try {
    let result: UserInfoIE = await postAPI("auth/login", { id, password });
    return result;
  } catch (e) {
    console.log("===============> login Error", e);
  }
};
