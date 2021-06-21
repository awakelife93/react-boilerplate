import axios, { AxiosRequestConfig } from "axios";
import _ from "lodash";
import {
  getLocalStorageItem,
  endPoint,
  setLocalStorageItem,
  removeLocalStorageItem,
  clearWindowData,
} from "../core";

const instance = axios.create({
  baseURL: endPoint,
  headers: {
    token: getLocalStorageItem("token") ?? "",
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getLocalStorageItem("token");

    // 토큰이 소실되었을 경우 지워주기
    if (_.isEmpty(token)) {
      config.headers.token = "";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 토큰 연장
    if (response.status === 201 && !_.isEmpty(response.data.token)) {
      setLocalStorageItem({ token: response.data.token });
    }
    return response;
  },
  (error) => {
    const err = error.response ?? error;

    if (_.isUndefined(err.status)) {
      console.log("NETWORK ERROR", err);
      // todo: 서버 통신 불가능으로 공통 처리
    }
    //
    if (err.status === 500) {
      console.log("500 ERROR", err);
      // todo: 서버에서도 정의하지 못한 에러이기 때문에 공통 처리
    }

    // 서버 Auth 실패 -> 로그아웃
    if (err.status === 401) {
      removeLocalStorageItem("token");
      // 글로벌 객체 삭제
      clearWindowData();
    }

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
  // 확장할 것이 있으면 여기에 작성
  return res.data;
};
