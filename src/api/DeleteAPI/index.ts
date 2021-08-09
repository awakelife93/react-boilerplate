import { deleteAPI } from "..";

export const deleteUser = async (): Promise<object> => {
  try {
    return await deleteAPI("tokenRemoveUser");
  } catch (e) {
    console.log("===============> deleteUser Error", e);
    throw e;
  }
};
