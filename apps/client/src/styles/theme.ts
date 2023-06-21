const colors = {
  just_green: '#16D7C0',
  green_text: '#6CA49D',
  black_green: '#2A3E3B',
  dark_green: '#455553',
  middle_green: '#677371',
  light_green: '#9BA3A2',
  bright_green: '#AFB8B7',
  white_green: '#EAEAEA',
  white: '#FFFFFF',
  landing_green: '#ECF6F2',
  just_blue: '#3674FF',
  just_skyblue: '#D4DEF4',
  just_light_skyblue: '#F1F5FF',
  inactive_background: '#F9F9F9',
  background: '#F2F4F6',
  grey_line: '#D5DAD9',
  button_black: '#222222',
  black: '#091C19',
  just_purple: '#C64BFF',
  just_pink: '#FF98EC',
} as const;

interface Font {
  weight: 400 | 500 | 600 | 700;
  size: number;
  lineHeight: number;
  letterSpacing?: number;
  textDecorationLine?: string;
}

function FONT({ weight, size, lineHeight, letterSpacing = 0, textDecorationLine = 'none' }: Font): string {
  return `
    font-family: 'Pretendard-Regular';
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight}px;
    letter-spacing: ${letterSpacing}em;
    text-decoration-line: ${textDecorationLine};
    `;
}

const fonts = {
  B_28: FONT({ weight: 700, size: 2.8, lineHeight: 33 }),
  B_22: FONT({ weight: 700, size: 2.2, lineHeight: 26 }),

  SB_17: FONT({ weight: 600, size: 1.7, lineHeight: 20 }),
  M_17: FONT({ weight: 500, size: 1.7, lineHeight: 20 }),
  R_17: FONT({ weight: 400, size: 1.7, lineHeight: 20 }),
  R_17_8: FONT({ weight: 400, size: 1.7, lineHeight: 25 }),

  M_16: FONT({ weight: 500, size: 1.6, lineHeight: 25 }),
  R_16: FONT({ weight: 400, size: 1.6, lineHeight: 25 }),
  figma_guide: FONT({ weight: 500, size: 1.6, lineHeight: 33.6 }),

  SB_15_2: FONT({ weight: 600, size: 1.5, lineHeight: 18, letterSpacing: -2 }),
  SB_15: FONT({ weight: 600, size: 1.5, lineHeight: 18 }),
  M_15: FONT({ weight: 500, size: 1.5, lineHeight: 25 }),
  M_15_18: FONT({ weight: 500, size: 1.5, lineHeight: 18 }),
  R_15: FONT({ weight: 400, size: 1.5, lineHeight: 18 }),
  R_15_2: FONT({ weight: 400, size: 1.5, lineHeight: 18, letterSpacing: -2 }),
  R_15_24: FONT({ weight: 400, size: 1.5, lineHeight: 24 }),

  SB_14_6: FONT({ weight: 600, size: 1.4, lineHeight: 17 }),
  M_14: FONT({ weight: 500, size: 1.4, lineHeight: 17 }),
  M_14_28: FONT({ weight: 500, size: 1.4, lineHeight: 28 }),
  R_14: FONT({ weight: 400, size: 1.4, lineHeight: 17 }),
  R_14_UNDERLINE: FONT({ weight: 400, size: 1.4, lineHeight: 17, textDecorationLine: 'underline' }),

  M_13: FONT({ weight: 500, size: 1.3, lineHeight: 16 }),

  SB_12: FONT({ weight: 500, size: 1.2, lineHeight: 14 }),
  M_12: FONT({ weight: 400, size: 1.2, lineHeight: 14 }),
  R_12_12: FONT({ weight: 400, size: 1.2, lineHeight: 12 }),

  R_11: FONT({ weight: 400, size: 1.1, lineHeight: 13 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
