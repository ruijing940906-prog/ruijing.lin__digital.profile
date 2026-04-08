import type { ReactNode } from "react";

export interface ImageTrailProps {
  items?: string[];
  variant?: number;
  children?: ReactNode;
}

declare function ImageTrail(props: ImageTrailProps): JSX.Element;
export default ImageTrail;
