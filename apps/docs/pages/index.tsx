import React, { memo, FC } from "react";
import TestComponent from "./components/client/test.component";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = () => {
  return (
    <>
      MainPage
      <TestComponent />
    </>
  );
};

export default memo(MainPage);
