import { patchAPI } from "..";
import { IUserInfo } from "../interface";

export const updateUser = async ({
  userId,
  name,
  password,
}: {
  userId: number;
  name: string;
  password: string;
}): Promise<IUserInfo> => {
  try {
    return await patchAPI("updateUser", {
      userId,
      name,
      password,
    });
  } catch (error: unknown) {
    console.log("===============> updateUser Error", error);
    throw error;
  }
};
