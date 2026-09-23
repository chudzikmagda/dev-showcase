export interface SEOProps {
  title: string;
  description: string;
  url: string;
  keywords: string;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageType?: string;
  type?: SEOType;
  siteName?: string;
  noIndex?: boolean;
}

export enum SEOType {
  WEBSITE = "website",
  ARTICLE = "article",
  PROFILE = "profile",
}
