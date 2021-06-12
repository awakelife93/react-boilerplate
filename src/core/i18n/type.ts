/**
 * @description
 * i18n Launage Command Type 정의
 * 자동으로 command를 만들어주는 함수를 만들까 했지만, 어차피 엔티티를 정의해줘야 하는거 Enum으로 땄음.
 */
export enum I18nCommandEnum {
  KO = "ko",
  EN = "en",
  LOGIN = "login",
  LOGOUT = "logout",
  AD_TITLE = "ad_title",
  AD_CONTENT1 = "ad_content1",
  AD_CONTENT2 = "ad_content2",

  EMAIL = "email",
  PASSWORD = "password",
}
