export type UserRoleType = "user" | "admin";

/**
 * 공통 인터페이스만 작성
 */
export interface IUserInfo {
  userId: number;
  token: string;
  email: string;
  name: string;
  role: UserRoleType;
}
