import type { LoginCredentials, FeatureCapability } from "../Login/types";

export type { LoginCredentials, FeatureCapability };

export interface LoginDarkProps {
  readonly backgroundImageSrc?: string;
  readonly globeImageSrc?: string;
  readonly onLogin?: (credentials: LoginCredentials) => void;
  readonly className?: string;
}
