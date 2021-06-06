export const showBottomContainer = (route: string): boolean => {
  switch (route) {
    case "/login":
      return false;
    default:
      return true;
  }
};
