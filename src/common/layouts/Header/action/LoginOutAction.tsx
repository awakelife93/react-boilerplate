import { RoutePath } from "../../../../route/routes";
import { TextButton } from "../../../components/Button";

export default (props: any) => {
  const { isLogin, _routePush, _logout, componentStyles } = props;
  return (
    <>
      {isLogin === false && (
        <TextButton
          {...componentStyles.TEXT_BUTTON}
          onClick={() => _routePush(RoutePath.LOGIN)}
        >
          로그인
        </TextButton>
      )}
      {isLogin === true && (
        <TextButton {...componentStyles.TEXT_BUTTON} onClick={() => _logout()}>
          로그아웃
        </TextButton>
      )}
    </>
  );
};
