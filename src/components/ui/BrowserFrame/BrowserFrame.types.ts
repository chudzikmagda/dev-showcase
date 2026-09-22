import type { Image } from "@/shared/types/image.types";

export enum DotColor {
  RED = "red",
  YELLOW = "yellow",
  GREEN = "green",
}

export type BrowserFrameProps = {
  image: Image;
  radius?: string;
};
