import _ from "lodash";
import { patchAPI } from "..";
import { UserInfoIE } from "../interface";

export const updateUser = async ({
  userId,
  userNickname,
  userPw,
}: {
  userId: number;
  userNickname: string;
  userPw: string;
}): Promise<UserInfoIE> => {
  try {
    const item: any = { userId };

    if (!_.isEmpty(userNickname)) item.userNickname = userNickname;

    if (!_.isEmpty(userPw)) item.userPw = userPw;

    return await patchAPI("updateUser", { ...item });
  } catch (e) {
    console.log("===============> updateUser Error", e);
    throw e;
  }
};
