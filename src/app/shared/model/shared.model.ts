export interface Blog {
  title: string;
  description: string;
  date: string;
  slug: string;
  thumbnail: string;
}
export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: string;
  height: number;
  width: number;
  overview: string[];
  problems: string[];
  solutions: string[];
  impact: string[];
  url: string;
}
