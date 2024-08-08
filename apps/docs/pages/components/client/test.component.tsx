import React, { FC, memo, useCallback, useState } from "react";
import { FormDataModel, UiForm } from "@repo/ui";
import { Button, Switch } from "@mui/material";
import { LibButton } from "@repo/library";

type TestComponentProps = {};

const TestComponent: FC<TestComponentProps> = () => {
  const [externalState, setExternalState] = useState<FormDataModel>({
    one: "Hi",
    // two: [{ name: "Nick" }, { name: "Max" }],
  });

  const [switchValue, setSwitchValue] = useState<"array">();

  const handleClick = useCallback(() => {
    setExternalState((prevState) => ({
      one: (prevState.one ?? "") + 1,
      two: prevState.two?.map((item) => ({ name: item.name + 1 })),
    }));
  }, []);

  return (
    <div>
      <Switch
        value={switchValue}
        onChange={() => {
          setSwitchValue((prevState) => (prevState ? undefined : "array"));
          setExternalState({ two: [{ name: "Nick" }, { name: "Max" }] });
        }}
      />
      <Button onClick={handleClick}>Add 1</Button>
      <LibButton />
      <UiForm externalValues={externalState} layout={switchValue} />
    </div>
  );
};

export default memo(TestComponent);
