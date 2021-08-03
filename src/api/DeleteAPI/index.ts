import { deleteAPI } from "..";

export const deleteUser = async (): Promise<object> => {
  try {
    let result: object = await deleteAPI("tokenRemoveUser");
    return result;
  } catch (e) {
    console.log("===============> deleteUser Error", e);
    throw e;
  }
};
