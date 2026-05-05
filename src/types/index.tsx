import { StaticImageData } from "next/image";

/* -------------------------
   APP / UI TYPES
------------------------- */

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

/* -------------------------
   WORK CONTENT TYPES
------------------------- */

export enum WorkType {
  PERSONAL = "Personal Projects",
  SOON = "Coming Soon!",
  WORK = "Work",
}

/**
 * Single unified image type used across:
 * - Work galleries
 * - Photo collections
 * - Carousel components
 */
export type GalleryImage = {
  id: number;
  img: StaticImageData;
  title: string;
  desc: string;
  location: string;
  date: string;
  link?: string;
};

export type WorkContent = {
  id: number;
  title: string;
  date: string;
  gitURL: string;
  gallery: GalleryImage[];
  video?: string;
  techstack: string[];
  overview: string;
};

/* -------------------------
   WORK FILE (ACCORDION)
------------------------- */

export type WorkFile = {
  id: number;
  type: WorkType;
  icon: StaticImageData;
  title: string;
  content: WorkContent;
};
