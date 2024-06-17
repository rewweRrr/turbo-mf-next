import React, { FC, memo, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FormDataModel } from "../models/form-data.model";

type UiFormControlsProps = { externalValues: FormDataModel };

const UiFormControls: FC<UiFormControlsProps> = ({ externalValues: { one } }) => {
  const context = useFormContext<FormDataModel>();
  const { setValue, getValues, formState } = context;

  useEffect(() => {
    console.log("useEffect FormControls", getValues("one"), "->", one + "*");
    setValue("one", one + "*");
  }, [getValues, one, setValue]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Controller
          render={({ field }) => <TextField fullWidth {...field} />}
          name="one"
        />
      </Grid>
      <Grid item xs={6}>
        <Button type={"button"} onClick={() => console.log(formState)}>
          Get Context
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(UiFormControls);
