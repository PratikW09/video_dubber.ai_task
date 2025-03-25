"use client";
import { Paper, Box } from "@mantine/core";
import { useRef } from "react";

const TextEditor = ({ handleInput, editorRef, darkMode }: any) => {
  return (
    <Paper shadow="xs" p="md" withBorder>
      <Box
        ref={editorRef}
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
};

export default TextEditor;
