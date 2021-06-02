import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const getAPI = async (endpoint: string = "", axiosOption = {}) => {
  const result = await instance.get(endpoint, axiosOption);
  return await generateAPIData(result);
};

export const deleteAPI = async (endpoint: string = "", axiosOption = {}) => {
  const result = await instance.delete(endpoint, axiosOption);
  return await generateAPIData(result);
};

export const postAPI = async (
  endpoint: string = "",
  data = {},
  axiosOption = {
    timeout: 2000,
  }
) => {
  const result = await instance.post(endpoint, data, axiosOption);
  return await generateAPIData(result);
};

export const patchAPI = async (
  endpoint: string = "",
  data = {},
  axiosOption = {
    timeout: 2000,
  }
) => {
  const result = await instance.patch(endpoint, data, axiosOption);
  return await generateAPIData(result);
};

export const generateAPIData = async (res: any) => {
  try {
    if (res.status !== 200) {
      const msg = res.message ?? "server error";
      throw new Error(msg);
    }
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
