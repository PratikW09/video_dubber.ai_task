"use client";
import { Group, Text, ActionIcon } from "@mantine/core";

// Define color type
interface Color {
  hex: string;
  name: string;
}

// Define props type
interface ColorPaletteProps {
  colors: Color[];
  selectedColor: string;
  handleColorChange: (color: string) => void;
  highlightColors: Color[];
  highlightColor: string;
  handleHighlightChange: (color: string) => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  selectedColor,
  handleColorChange,
  highlightColors,
  highlightColor,
  handleHighlightChange,
}) => {
  return (
    <>
      {/* Text Color Palette */}
      <Text mt="md" fw={500} ta="center">
        Select Text Color:
      </Text>
      <Group justify="center" mt="xs">
        {colors.map((color) => (
          <ActionIcon
            key={color.hex}
            onClick={() => handleColorChange(color.hex)}
            variant="filled"
            radius="xl"
            size="lg"
            title={color.name}
            style={{
              backgroundColor: color.hex,
              border:
                color.hex === selectedColor
                  ? "2px solid #333"
                  : "2px solid transparent",
              outline: "none",
            }}
          />
        ))}
      </Group>

      {/* Highlight Color Palette */}
      <Text mt="md" fw={500} ta="center">
        Select Highlight Color:
      </Text>
      <Group justify="center" mt="xs">
        {highlightColors.map((color) => (
          <ActionIcon
            key={color.hex}
            onClick={() => handleHighlightChange(color.hex)}
            variant="filled"
            radius="xl"
            size="lg"
            title={color.name}
            style={{
              backgroundColor: color.hex,
              border:
                color.hex === highlightColor
                  ? "2px solid #333"
                  : "2px solid transparent",
              outline: "none",
            }}
          />
        ))}
      </Group>
    </>
  );
};

export default ColorPalette;
