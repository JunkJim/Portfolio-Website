import { StaticImageData } from "next/image";

export type Tab = {
  id: number;
  title: string;
  message: string;
  Icon: StaticImageData;
  isMinimized: boolean;
  zIndex: number;
  program: App;
  prompt: boolean;
  backBtnActive: boolean;
};

export type RootState = {
  tab: {
    tray: Tab[];
    id: number;
    currentFocusedTab: number;
    currentZIndex: number;
  };
  system: {
    backactive: boolean;
  };
};

export enum App {
  MYWORK,
  OUTLOOK,
  MYDOCUMENT,
  MYGALLERY,
  MYBLOG,
  ERROR,
  INFO,
  HELP,
  WARNING,
  WELCOME,
}

export enum WorkType {
  PERSONAL = "Personal Projects",
  SOON = "Coming Soon!",
  WORK = "Work",
}

export type WorkFile = {
  id: number;
  type: WorkType;
  icon: StaticImageData;
  title: string;
  content: WorkContent;
};

export type GalleryItem = {
  img: StaticImageData;
  link?: string;
};
export type WorkContent = {
  id: number;
  title: string;
  date: string;
  gitURL: string;
  gallery: GalleryItem[];
  video?: string;
  techstack: string[];
  overview: string;
};

export type GalleryImage = {
  id: number;
  title: string;
  desc: string;
  location: string;
  date: string;
  img: StaticImageData;
};
