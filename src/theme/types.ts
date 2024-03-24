export interface ThemeDefinition {
  readonly palette: {
    readonly primary: string;
    readonly secondary: string;
  };
  readonly typography: {
    readonly fontFamily: string;
  };
}

export interface event {
  id?: string;
  title: string;
  start: string;
  end: string;
  color: string;
}
