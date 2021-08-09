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

    // 사용자 화면은 권한 1 고정
    return await patchAPI("updateUser", { ...item, userRoleIds: [1] });
  } catch (e) {
    console.log("===============> updateUser Error", e);
    throw e;
  }
};
