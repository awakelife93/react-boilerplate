import axios from "axios";
import { getLocalStorageItem, endPoint } from "../core";

const instance = axios.create({
  baseURL: endPoint,
  headers: {
    token: getLocalStorageItem("token"),
  },
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
  if (res.status !== 200) {
    const msg = res.data.message ?? res.message;
    return new Error(msg);
  }
  return res.data;
};
