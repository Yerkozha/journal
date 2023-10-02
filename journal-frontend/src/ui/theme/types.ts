export interface ThemeFontSize {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  }
  
  export interface ThemeBorderRadius {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    r: string;
  }
  
  export interface ThemeFontWeight {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
    black: number;
  }
  
  export interface ThemeColors {
    [color: string]: string | string[];
  }
  
  export interface ThemeColorTools {
    getPrimary: (index: number, alpha: number) => string;
    getSecondary: (index: number, alpha: number) => string;
  }
  
  export interface Theme {
    fontWeight: ThemeFontWeight;
    fontSize: ThemeFontSize;
    borderRadius: ThemeBorderRadius;
    colorList: ThemeColors;
    colorTools: ThemeColorTools;
  }
  