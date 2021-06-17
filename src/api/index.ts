import axios from "axios";
import { getLocalStorageItem, endPoint } from "../core";

const instance = axios.create({
  baseURL: endPoint,
  headers: {
    token: getLocalStorageItem("token") ?? "",
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // todo = 500 error는 여기서 처리해버리기
    const err = error.response;
    return Promise.reject(err);
  }
);

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
  return res.data;
};
