import React, { FC, memo, useState } from "react";
import { Switch } from "@mui/material";
import { LibButton } from "@repo/library";
import { UiButton } from "@repo/ui";

type TestComponentProps = {};

const TestComponent: FC<TestComponentProps> = () => {
  const [switchValue, setSwitchValue] = useState<"array">();

  return (
    <div>
      <Switch
        value={switchValue}
        onChange={() => {
          setSwitchValue((prevState) => (prevState ? undefined : "array"));
        }}
      />
      <LibButton />
      <UiButton>1234</UiButton>
    </div>
  );
};

export default memo(TestComponent);
