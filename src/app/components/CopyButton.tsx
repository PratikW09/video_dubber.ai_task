"use client";
import { Button } from "@mantine/core";

const CopyButton = ({ handleCopyToClipboard }: any) => {
  return (
    <Button
      mt="md"
      variant="filled"
      color="blue"
      onClick={handleCopyToClipboard}
      fullWidth
    >
      Copy Text
    </Button>
  );
};

export default CopyButton;
