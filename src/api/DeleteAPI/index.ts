import { deleteAPI } from "..";

export const deleteUser = async (): Promise<object> => {
  try {
    return await deleteAPI("tokenRemoveUser");
  } catch (error: unknown) {
    console.log("===============> deleteUser Error", error);
    throw error;
  }
};
