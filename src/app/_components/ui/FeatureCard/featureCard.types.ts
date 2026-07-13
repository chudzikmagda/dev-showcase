export interface FeatureCardProps {
  iconURL: string;
  category: string;
  title: string;
  description: string;
  link?: {
    label: string;
    url: string;
  };
}
