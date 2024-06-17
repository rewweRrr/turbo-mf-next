import React, { FC, memo } from "react";
import { UiButton } from "@repo/ui";

type NextButtonProps = {};

const NextButton: FC<NextButtonProps> = () => {
  return <UiButton appName="OLOLO">Hi</UiButton>;
};

export default memo(NextButton);
