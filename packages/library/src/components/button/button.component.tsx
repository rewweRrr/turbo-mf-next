import { memo, FC } from "react";
import { LibButton2 } from "#lib/src/components";

type LibButtonProps = {};

const LibButton: FC<LibButtonProps> = () => {
  return <LibButton2 />;
};

export default memo(LibButton);
