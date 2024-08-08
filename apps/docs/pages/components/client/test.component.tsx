import React, { FC, memo, useState } from "react";
import { Switch } from "@mui/material";
import { LibButton } from "@repo/library";

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
    </div>
  );
};

export default memo(TestComponent);
