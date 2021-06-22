import { getAPI } from "..";
import { __DEV__ } from "../../core";
import { UserInfoIE } from "../interface";
import { ContentsIE } from "./interface";

// todo: 페이징 추가
export const getPagingContentsItem = async (skip: number = 0) => {
  try {
    const result: ContentsIE[] = await getAPI("findContents", {
      take: skip + 20,
      skip,
    });
    return result;
  } catch (e) {
    console.log("===============> getPagingCardItem Error", e);
    throw e;
  }
};

export const getUserProfile = async () => {
  try {
    const result: UserInfoIE = await getAPI("findUserProfile");
    return result;
  } catch (e) {
    console.log("===============> getUserProfile Error", e);
    throw e;
  }
};
