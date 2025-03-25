"use client";
import { Button } from "@mantine/core";

// Define the prop type
interface CopyButtonProps {
  handleCopyToClipboard: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({ handleCopyToClipboard }) => {
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
