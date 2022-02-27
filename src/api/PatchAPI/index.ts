import { UnknownObject } from "@/common/type";
import _ from "lodash";
import { patchAPI } from "..";
import { IUserInfo } from "../interface";

export const updateUser = async ({
  userId,
  userNickname,
  userPw,
}: {
  userId: number;
  userNickname: string;
  userPw: string;
}): Promise<IUserInfo> => {
  try {
    const item: UnknownObject = { userId };

    if (!_.isEmpty(userNickname)) item.userNickname = userNickname;

    if (!_.isEmpty(userPw)) item.userPw = userPw;

    return await patchAPI("updateUser", { ...item });
  } catch (error: unknown) {
    console.log("===============> updateUser Error", error);
    throw error;
  }
};
