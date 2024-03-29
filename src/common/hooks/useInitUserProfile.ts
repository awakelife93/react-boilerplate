import { getUserProfile } from "@/api/GetAPI";
import { UserInfoType } from "@/api/type";
import { getLocalStorageItem } from "@/core";
import { ReduxStoreType } from "@/redux/type";
import _ from "lodash";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useAction from "./useAction";

const useInitUserProfile = (): void => {
  const { setUserInfoAction } = useAction();
  const {
    reduxStore: { userStore },
  } = useSelector((state: ReduxStoreType) => state);

  const initUserProfile = async (): Promise<void> => {
    const profile: UserInfoType = await getUserProfile();

    if (_.isFunction(setUserInfoAction)) {
      setUserInfoAction({
        isLogin: true,
        info: { ...profile },
      });
    }
  };

  useEffect(() => {
    const token = getLocalStorageItem("token");
    // * 로그인이 된 상태라면
    if (!_.isNull(token) && !userStore.user.isLogin) {
      initUserProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useInitUserProfile;
