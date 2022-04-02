import { getAPI } from "..";
import { UserInfoType } from "../type";
import { ContentsType } from "./type";

export const getThemeItem = async () => {
  try {
    return await getAPI("themeItem");
  } catch (error: unknown) {
    console.log("===============> getThemeItem Error", error);
    throw error;
  }
};

export const getContents = async (
  skip: number = 0
): Promise<[ContentsType[], number]> => {
  try {
    // * typeorm 엔티티의 take, skip을 그대로 전송하기 위해 프로퍼티를 지어줌.
    return await getAPI("contents", {
      take: 20,
      skip,
    });
  } catch (error: unknown) {
    console.log("===============> getContents Error", error);
    throw error;
  }
};

export const getUserProfile = async (): Promise<UserInfoType> => {
  try {
    return await getAPI("users/profile");
  } catch (error: unknown) {
    console.log("===============> getUserProfile Error", error);
    throw error;
  }
};
