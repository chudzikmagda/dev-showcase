import type { Metadata } from "next";

import type { SEOProps } from "../types/seo.types";
import { SEOType } from "../types/seo.types";

export const SITE_URL = "https://magdachudzik.pl";
const SITE_NAME = "Magda Chudzik";

export const buildSeoMetadata = ({
  title,
  description,
  url,
  imageUrl,
  imageAlt = title,
  imageWidth = "1200",
  imageHeight = "630",
  imageType = "image/jpeg",
  keywords,
  type = SEOType.WEBSITE,
  siteName = SITE_NAME,
  noIndex,
}: SEOProps): Metadata => {
  return {
    title,
    description,
    keywords,
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    alternates: noIndex ? undefined : { canonical: url },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName,
      locale: "en_US",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: Number(imageWidth),
              height: Number(imageHeight),
              alt: imageAlt,
              type: imageType,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      creator: SITE_NAME,
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
};
