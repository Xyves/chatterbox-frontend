import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

export default function ChatInput() {
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef(null);
  const togglePicker = () => setPickerOpen((prev) => !prev);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setPickerOpen(false); // Close the picker if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <Box position="relative" display="inline-block " width="3/4">
      <Input placeholder="Say something..." variant="subtle" />
    </Box>
  );
}
