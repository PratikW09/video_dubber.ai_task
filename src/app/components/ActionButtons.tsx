"use client";
import { Group, Button } from "@mantine/core";

// Define the prop types correctly
interface ActionButtonsProps {
  applyStyleToSelection: (style: string) => void;
  applyHighlightToSelection: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  applyStyleToSelection,
  applyHighlightToSelection,
}) => {
  return (
    <Group justify="center" mb="md">
      <Button variant="outline" onClick={() => applyStyleToSelection("reset")}>
        Reset
      </Button>
      <Button variant="outline" onClick={() => applyStyleToSelection("bold")}>
        Bold
      </Button>
      <Button variant="outline" onClick={() => applyStyleToSelection("underline")}>
        Underline
      </Button>
      <Button variant="outline" onClick={() => applyHighlightToSelection()}>
        Highlight
      </Button>
    </Group>
  );
};

export default ActionButtons;
