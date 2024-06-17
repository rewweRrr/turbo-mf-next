"use client";

import { ReactNode } from "react";
import { Button, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles/createTheme";

interface UiButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const UiButton = ({ children, className, appName }: UiButtonProps) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md"),
  );

  return (
    <Button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {isMobile ? children : <>Default</>}
    </Button>
  );
};
