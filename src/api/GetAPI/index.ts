import { getAPI } from "..";
import { defaultPagingCount } from "../../common/const";
import { UserInfoIE } from "../interface";
import { ContentsIE } from "./interface";

export const findThemeItem = async () => {
  try {
    const result: any = await getAPI("findThemeItem");
    return result;
  } catch (e) {
    console.log("===============> findThemeItem Error", e);
    throw e;
  }
};

export const findContents = async (
  skip: number = 0
): Promise<[ContentsIE[], number]> => {
  try {
    // typeorm 엔티티의 take, skip을 그대로 전송하기 위해 프로퍼티를 지어줌.
    const result: Promise<[ContentsIE[], number]> = await getAPI(
      "findContents",
      {
        take: defaultPagingCount,
        skip,
      }
    );
    return result;
  } catch (e) {
    console.log("===============> findContents Error", e);
    throw e;
  }
};

export const findUserProfile = async (): Promise<UserInfoIE> => {
  try {
    const result: UserInfoIE = await getAPI("findUserProfile");
    return result;
  } catch (e) {
    console.log("===============> findUserProfile Error", e);
    throw e;
  }
};
