import { KeyNamesMap, KeyCodesMap } from "./types";

export const keyCodes: KeyCodesMap = {
  Digit0: 0x00,
  Digit1: 0x01,
  Digit2: 0x02,
  Digit3: 0x03,
  Digit4: 0x04,
  Digit5: 0x05,
  Digit6: 0x06,
  Digit7: 0x07,
  Digit8: 0x08,
  Digit9: 0x09,
  KeyA: 0x0a,
  KeyB: 0x0b,
  KeyC: 0x0c,
  KeyD: 0x0d,
  KeyE: 0x0e,
  KeyF: 0x0f,
  Space: 0x13,
  Tab: 0x13,
  Enter: 0x12,
  Minus: 0x11,
  Plus: 0x10,
  ArrowDown: 0x11,
  ArrowUp: 0x10,
};

export const keyNames: KeyNamesMap = {
  "0": "Digit0",
  "1": "Digit1",
  "2": "Digit2",
  "3": "Digit3",
  "4": "Digit4",
  "5": "Digit5",
  "6": "Digit6",
  "7": "Digit7",
  "8": "Digit8",
  "9": "Digit9",
  A: "KeyA",
  B: "KeyB",
  C: "KeyC",
  D: "KeyD",
  E: "KeyE",
  F: "KeyF",
  "@": "Tab",
  G: "Enter",
  "-": "Minus",
  "+": "Plus",
};

export const keyMaps = {
  classic: "@37BFG26AE-152D+048C",
  modern: "@CDEFG89AB-4567+0123",
  jelic: "@798AG456B-123C+0FED",
};

