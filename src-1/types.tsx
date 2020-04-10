import { StyledProps } from 'styled-components';

// export interface Dict<T> { [key: string]: T }

// export type AnyObj = { [key: string]: any };

export type Stylable = StyledProps<{
  className?: string;
  children?: any[];
}>;

interface Message {
  type: string;
}

interface MemoryMessage extends Message {
  type: 'POST_MESSAGE';
  from: number;
  size: number;
  buffer: ArrayBuffer;
}

interface CPUMessage extends Message {
  type: 'POST_OUTPORTS';
  buffer: ArrayBuffer;
  display: ArrayBuffer;
  wavelength: any;
}

interface KeyMap {
  [key: string]: number | null;
}

const keyMap:KeyMap = {
  Digit0: 0x00, Digit1: 0x01, Digit2: 0x02, Digit3: 0x03,
  Digit4: 0x04, Digit5: 0x05, Digit6: 0x06, Digit7: 0x07,
  Digit8: 0x08, Digit9: 0x09,
  KeyA: 0x0A, KeyB: 0x0B, KeyC: 0x0C, KeyD: 0x0D,
  KeyE: 0x0E, KeyF: 0x0F,
  Space: 0x13, Tab: 0x13,
  Enter: 0x12, Minus: 0x11,
  ArrowDown: 0x11, ArrowUp: 0x10,
};
