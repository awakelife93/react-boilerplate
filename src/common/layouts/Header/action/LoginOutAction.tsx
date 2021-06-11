import { RoutePath } from "../../../../route/routes";
import { Button } from "../../../components";

export default (props: any) => {
  const { isLogin, _routePush, _logout, componentStyles } = props;
  return (
    <>
      {isLogin === false && (
        <Button.TextButton
          style={{
            ...componentStyles.TEXT_BUTTON,
          }}
          onClick={() => _routePush(RoutePath.LOGIN)}
        >
          로그인
        </Button.TextButton>
      )}
      {isLogin === true && (
        <Button.TextButton
          style={{
            ...componentStyles.TEXT_BUTTON,
          }}
          onClick={() => _logout()}
        >
          로그아웃
        </Button.TextButton>
      )}
    </>
  );
};
