import { UnknownObject } from "@/common/type";

/**
 * 공통 인터페이스만 작성
 */
export interface IUserInfo {
  userId: number;
  token: string;
  userEmail: string;
  userNickname: string;
  userRoles: UnknownObject[];
}
