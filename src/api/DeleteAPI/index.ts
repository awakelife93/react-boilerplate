import { deleteAPI } from "..";

export const deleteUser = async (): Promise<object> => {
  try {
    return await deleteAPI("tokenRemove");
  } catch (error: unknown) {
    console.log("===============> deleteUser Error", error);
    throw error;
  }
};
