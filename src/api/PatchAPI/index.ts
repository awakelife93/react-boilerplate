import { UnknownObject } from "@/common/type";
import _ from "lodash";
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
    const item: UnknownObject = { userId };

    if (!_.isEmpty(name)) item.name = name;

    if (!_.isEmpty(password)) item.password = password;

    return await patchAPI("updateUser", { ...item });
  } catch (error: unknown) {
    console.log("===============> updateUser Error", error);
    throw error;
  }
};
