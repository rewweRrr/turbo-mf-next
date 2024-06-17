import React, { FC, memo, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { FormDataModel } from "../models/form-data.model";

type UiFormArrayControlsProps = { externalValues: FormDataModel };

const UiFormArrayControls: FC<UiFormArrayControlsProps> = ({
  externalValues,
}) => {
  const { control } = useFormContext();
  const { fields, update } = useFieldArray<FormDataModel>({
    control,
    name: "two",
  });

  const context = useFormContext<FormDataModel>();
  const { getValues } = context;

  console.log("Render UiFormArrayControls fields", fields);

  useEffect(() => {
    externalValues?.two?.forEach((item, index) => {
      console.log(
        "useEffect FormArrayControls",
        getValues(`two.${index}.name`),
        "->",
        item.name + "*",
      );
      update(index, { name: item.name + "*" });
    });
  }, [externalValues, getValues, update]);

  return (
    <Grid container spacing={3}>
      {fields.map((item, index) => (
        <Grid item xs={6} key={item.id}>
          <Controller
            render={({ field }) => <TextField fullWidth {...field} />}
            name={`two.${index}.name`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(UiFormArrayControls);
