"use client";
import { Paper, Box } from "@mantine/core";
import { forwardRef } from "react";

interface TextEditorProps {
  handleInput: (event: React.FormEvent<HTMLDivElement>) => void;
  darkMode: boolean;
}

// Use forwardRef to pass ref properly
const TextEditor = forwardRef<HTMLDivElement, TextEditorProps>(
  ({ handleInput, darkMode }, ref) => {
    return (
      <Paper shadow="xs" p="md" withBorder>
        <Box
          ref={ref}
          contentEditable={true}
          onInput={handleInput}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            minHeight: "150px",
            outline: "none",
            borderRadius: "8px",
            lineHeight: "1.5",
            whiteSpace: "pre-wrap",
            backgroundColor: darkMode ? "#1e293b" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />
      </Paper>
    );
  }
);

TextEditor.displayName = "TextEditor"; // Required for forwardRef
export default TextEditor;
