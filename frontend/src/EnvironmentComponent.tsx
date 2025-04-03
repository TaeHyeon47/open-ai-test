"use client";
import { Fragment } from "react";
import MuiThemeProvider from "./mui/theme/MuiThemeProvider";

// #이모션캐시 적용 시, 하이드레이션 에러 발생
// import { CacheProvider } from "@emotion/react";
// import createEmotionCache from "./createEmotionCache";

const EnvironmentComponent = ({ children }: { children: React.ReactNode }) => {
  //   const clientSideEmotionCache = createEmotionCache();

  return (
    <Fragment>
      <MuiThemeProvider>{children}</MuiThemeProvider>;
    </Fragment>
  );
};

export default EnvironmentComponent;
