import { generateAPIData, getAPI } from "..";
import { __DEV__ } from "../../core";
import { UserInfoIE } from "../interface";
import { TempIE } from "./interface";
import { sample } from "./sample";

export const getPagingContentsItem = async () => {
  try {
    let result: TempIE = await generateAPIData(sample);
    if (!__DEV__) result = await getAPI();
    return result;
  } catch (e) {
    console.log("===============> getPagingCardItem Error", e);
    throw e;
  }
};

export const getUserProfile = async () => {
  try {
    const result: UserInfoIE = await getAPI("getUserProfile");
    return result;
  } catch (e) {
    console.log("===============> getUserProfile Error", e);
    throw e;
  }
};
