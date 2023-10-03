import { ReactNode } from 'react';
import { TechLinks } from './Technology';

export type IImage = `/${string}.${string}`;
export type StackLogo = keyof typeof TechLinks;

export interface IProjectPage {
  Seo: {
    description: string;
    title: string;
    image: IImage;
  };
  title: string;
  subtitle: ReactNode;
  stack: string[];
  links: {
    code: { name?: string; git: string }[];
    live: string;
  };
  whyStack: ReactNode;
  stackInfo: StackLogo[];
  lessons: string[];
  projectImage: IImage;
}
