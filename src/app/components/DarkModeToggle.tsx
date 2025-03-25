"use client";
import { Group, Switch } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

// Define prop types
interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <Group justify="end" mb="md">
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        size="md"
        className="border-2"
        color={darkMode ? "yellow" : "blue"}
        thumbIcon={darkMode ? <IconMoon size={16} /> : <IconSun size={16} />}
      />
    </Group>
  );
};

export default DarkModeToggle;
