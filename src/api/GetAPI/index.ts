import { getAPI } from "..";
import { UserInfoIE } from "../interface";
import { ContentsType } from "./type";

export const findThemeItem = async () => {
  try {
    return await getAPI("findThemeItem");
  } catch (error: unknown) {
    console.log("===============> findThemeItem Error", error);
    throw error;
  }
};

export const findContents = async (
  skip: number = 0
): Promise<[ContentsType[], number]> => {
  try {
    // * typeorm 엔티티의 take, skip을 그대로 전송하기 위해 프로퍼티를 지어줌.
    return await getAPI("findContents", {
      take: 20,
      skip,
    });
  } catch (error: unknown) {
    console.log("===============> findContents Error", error);
    throw error;
  }
};

export const findUserProfile = async (): Promise<UserInfoIE> => {
  try {
    return await getAPI("findUserProfile");
  } catch (error: unknown) {
    console.log("===============> findUserProfile Error", error);
    throw error;
  }
};
