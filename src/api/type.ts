export type UserRoleType = "user" | "admin";

export type UserInfoType = {
  userId: number;
  token: string;
  email: string;
  name: string;
  role: UserRoleType;
};
