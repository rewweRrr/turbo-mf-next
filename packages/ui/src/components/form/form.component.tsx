import React, { FC, memo, useCallback, useLayoutEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import UiFormControls from "./controls/form-controls.component";

import UiFormArrayControls from "./controls/form-array-control.component";
import { FormDataModel } from "@repo/ui/src/components";
import { ALL_CONST } from "@repo/ui/src/constants/all.constants";

type UiFormProps = {
  onSubmit?: (formData: FormDataModel) => void;
  layout?: "array";
  externalValues: FormDataModel;
};

const UiForm: FC<UiFormProps> = ({ externalValues, layout }) => {
  console.log(ALL_CONST, "hi");

  const internalValues = useMemo<FormDataModel>(
    () => JSON.parse(JSON.stringify(externalValues)),
    [externalValues],
  );

  const formMethods = useForm<FormDataModel>({
    mode: "onChange",
    reValidateMode: "onChange",
    values: internalValues,
  });

  const { reset, getValues } = formMethods;

  console.log("render Form", getValues());

  const { handleSubmit } = formMethods;

  const onSubmit = useCallback((formData: FormDataModel) => {
    console.log("SUBMIT", formData);
  }, []);

  return (
    <FormProvider {...formMethods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ background: "green" }}
      >
        {layout ? (
          <UiFormArrayControls externalValues={externalValues} />
        ) : (
          <UiFormControls externalValues={externalValues} />
        )}
        <Button type="submit">Submit</Button>
      </Box>
    </FormProvider>
  );
};

export default memo(UiForm);
