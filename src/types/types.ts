import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Moment } from "moment";

export interface ThemeDefinition {
  readonly palette: {
    readonly primary: string;
    readonly secondary: string;
  };
  readonly typography: {
    readonly fontFamily: string;
  };
}

export interface DaysGrid {
  no: number;
  date: Moment;
}

export interface event {
  id?: string;
  title: string;
  popupContent: ReactJSXElement;
  date: Date | Moment;
  color?: string;
}

export type EventsData = Array<Event>;
