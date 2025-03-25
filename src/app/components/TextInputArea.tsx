"use client";
import { useState, useRef, useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import DarkModeToggle from "./DarkModeToggle";
import ActionButtons from "./ActionButtons";
import TextEditor from "./TextEditor";
import ColorPalette from "./ColorPalette";
import CopyButton from "./CopyButton";

const TextInputArea = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#000000");
  const [highlightColor, setHighlightColor] = useState<string>("#ffff00");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    document.execCommand("foreColor", false, selectedColor);
  };

  const applyStyleToSelection = (styleType: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (!range.collapsed) {
      const span = document.createElement("span");

      switch (styleType) {
        case "bold":
          span.style.fontWeight = "bold";
          break;
        case "underline":
          span.style.textDecoration = "underline";
          break;
        case "highlight":
          span.style.backgroundColor = highlightColor;
          break;
        case "reset":
          span.style.fontWeight = "normal";
          span.style.textDecoration = "none";
          span.style.color = "#000000";
          span.style.backgroundColor = "transparent";
          break;
      }

      span.style.color = selectedColor;
      span.appendChild(range.extractContents());
      range.deleteContents();
      range.insertNode(span);
      selection.removeAllRanges();
    }
  };

  const applyColorToSelection = () => {
    applyStyleToSelection("color");
  };

  const applyHighlightToSelection = () => {
    applyStyleToSelection("highlight");
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    applyColorToSelection();
  };

  const handleHighlightChange = (color: string) => {
    setHighlightColor(color);
    applyHighlightToSelection();
  };

  const handleCopyToClipboard = () => {
    if (editorRef.current) {
      const textToCopy = editorRef.current.innerHTML;
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Text copied to clipboard!");
      });
    }
  };

  useEffect(() => {
    const editor = editorRef.current;
    if (editor) {
      editor.innerHTML = `<span style="color: ${selectedColor};"></span>`;
    }
  }, []);

  const colors = [
    { name: "Red", hex: "#ff0000" },
    { name: "Green", hex: "#00ff00" },
    { name: "Blue", hex: "#0000ff" },
    { name: "Orange", hex: "#ff9900" },
    { name: "Purple", hex: "#9900ff" },
    { name: "Black", hex: "#000000" },
    { name: "Pink", hex: "#ff66b2" },
    { name: "Cyan", hex: "#33cccc" },
  ];

  const highlightColors = [
    { name: "Yellow", hex: "#ffff00" },
    { name: "Light Red", hex: "#ffcccb" },
    { name: "Light Green", hex: "#ccffcc" },
    { name: "Light Blue", hex: "#cce5ff" },
    { name: "Light Orange", hex: "#ffebcc" },
  ];

  return (
    <Container
      size="xl"
      className={`mt-8 relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <ActionButtons
        applyStyleToSelection={applyStyleToSelection}
        applyHighlightToSelection={applyHighlightToSelection}
      />
      <TextEditor
        handleInput={handleInput}
        editorRef={editorRef}
        darkMode={darkMode}
      />
      <ColorPalette
        colors={colors}
        selectedColor={selectedColor}
        handleColorChange={handleColorChange}
        highlightColors={highlightColors}
        highlightColor={highlightColor}
        handleHighlightChange={handleHighlightChange}
      />
      <CopyButton handleCopyToClipboard={handleCopyToClipboard} />
      <Divider className="my-4" mt="lg" />
    </Container>
  );
};

export default TextInputArea;
