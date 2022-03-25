import _ from "lodash";
import { patchAPI } from "..";
import { UserInfoType } from "../type";

export const updateUser = async ({
  userId,
  name,
  password,
}: {
  userId: number;
  name: string;
  password: string;
}): Promise<UserInfoType> => {
  try {
    const item = {} as {
      name: string;
      password: string;
    };

    if (!_.isEmpty(name)) item.name = name;

    if (!_.isEmpty(password)) item.password = password;

    return await patchAPI("updateUser", {
      userId,
      ...item,
    });
  } catch (error: unknown) {
    console.log("===============> updateUser Error", error);
    throw error;
  }
};
