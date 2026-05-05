import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import filmstrip from "../../assets/Filmstrip.png";
import laptop from "../../assets/laptop.png";
import den1 from "../../assets/den1.jpg";
import den2 from "../../assets/den2.jpg";
import den5 from "../../assets/den5.jpg";
import den6 from "../../assets/den6.jpg";
import den7 from "../../assets/den7.jpg";
import den8 from "../../assets/den8.jpg";
import den9 from "../../assets/den9.jpg";
import den10 from "../../assets/den10.jpg";
import creel1 from "../../assets/creel1.jpg";
import creel2 from "../../assets/creel2.jpg";
import creel3 from "../../assets/creel3.jpg";
import creel4 from "../../assets/creel4.jpg";
import creel5 from "../../assets/creel5.jpg";
import creel6 from "../../assets/creel6.jpg";
import creel7 from "../../assets/creel7.jpg";
import creel8 from "../../assets/creel8.jpg";
import creel9 from "../../assets/creel9.jpg";
import creel10 from "../../assets/creel10.jpg";
import creel11 from "../../assets/creel11.jpg";
import butterfly from "../../assets/butterfly.png";
import pweb from "../../assets/pweb.jpg";
import pweb2 from "../../assets/pweb2.jpg";
import pweb3 from "../../assets/pweb3.jpg";
import pweb4 from "../../assets/pweb4.jpg";
import pweb5 from "../../assets/pweb5.jpg";
import pweb6 from "../../assets/pweb6.jpg";
import velo1 from "../../assets/velo1.jpg";
import velo2 from "../../assets/velo2.jpg";
import velo3 from "../../assets/velo3.jpg";
import velo4 from "../../assets/velo4.jpg";
import velo5 from "../../assets/velo5.jpg";
import velo6 from "../../assets/velo6.jpg";
import velo7 from "../../assets/velo7.jpg";
import velo8 from "../../assets/velo8.jpg";
import velo9 from "../../assets/velo9.png";
import velo10 from "../../assets/velo10.jpg";
import velo11 from "../../assets/velo11.jpg";
import velo12 from "../../assets/velo12.jpg";
import velo13 from "../../assets/velo13.jpg";
import art1 from "../../assets/art1.png";
import art3 from "../../assets/art3.png";
import art4 from "../../assets/art4.png";
import art5 from "../../assets/art5.png";
import art6 from "../../assets/art6.png";
import art7 from "../../assets/art7.png";
import art8 from "../../assets/art8.png";
import art9 from "../../assets/art9.png";
import art10 from "../../assets/art10.png";
import art11 from "../../assets/art11.png";
import art12 from "../../assets/art12.png";
import art13 from "../../assets/art13.png";
import art14 from "../../assets/art14.png";
import art15 from "../../assets/art15.png";
import art16 from "../../assets/art16.png";
import art17 from "../../assets/art17.png";
import art18 from "../../assets/art18.png";
import art19 from "../../assets/art19.png";
import art20 from "../../assets/art20.png";
import paintbrush from "../../assets/paint.png";
import org1 from "../../assets/org1.jpg";
import org2 from "../../assets/org2.jpg";
import org3 from "../../assets/org3.jpg";
import org4 from "../../assets/org4.jpg";
import org5 from "../../assets/org5.jpg";
import org6 from "../../assets/org6.jpg";
import agit1 from "../../assets/agit1.jpg";
import agit2 from "../../assets/agit2.jpg";
import agit3 from "../../assets/agit3.jpg";
import agit4 from "../../assets/agit4.jpg";
import agit5 from "../../assets/agit5.jpg";
import agit9 from "../../assets/agit9.jpg";
import agit10 from "../../assets/agit10.jpg";
import agit11 from "../../assets/agit11.jpg";
import agit12 from "../../assets/agit12.jpg";
import agit13 from "../../assets/agit13.jpg";
import agit14 from "../../assets/agit14.jpg";
import tokyo1 from "../../assets/tokyo1.jpg";
import tokyo2 from "../../assets/tokyo2.jpg";
import tokyo3 from "../../assets/tokyo3.jpg";
import tokyo4 from "../../assets/tokyo4.jpg";
import tokyo5 from "../../assets/tokyo5.jpg";
import tokyo6 from "../../assets/tokyo6.jpg";
import tokyo7 from "../../assets/tokyo7.jpg";
import tokyo8 from "../../assets/tokyo8.jpg";
import tokyo9 from "../../assets/tokyo9.jpg";
import tokyo10 from "../../assets/tokyo10.jpg";
import tokyo11 from "../../assets/tokyo11.jpg";
import tokyo12 from "../../assets/tokyo12.jpg";
import tokyo13 from "../../assets/tokyo13.jpg";
import tokyo14 from "../../assets/tokyo14.jpg";
import tokyo15 from "../../assets/tokyo15.jpg";
import tokyo16 from "../../assets/tokyo16.jpg";
import tokyo17 from "../../assets/tokyo17.jpg";
import tokyo18 from "../../assets/tokyo18.jpg";
import tokyo19 from "../../assets/tokyo19.jpg";
import tokyo20 from "../../assets/tokyo20.jpg";
import tokyo21 from "../../assets/tokyo21.jpg";
import tokyo22 from "../../assets/tokyo22.jpg";
import tokyo23 from "../../assets/tokyo23.jpg";
import tokyo24 from "../../assets/tokyo24.jpg";
import tokyo25 from "../../assets/tokyo25.jpg";
import tokyo26 from "../../assets/tokyo26.jpg";
import tokyo27 from "../../assets/tokyo27.jpg";
import tokyo28 from "../../assets/tokyo28.jpg";
import tokyo29 from "../../assets/tokyo29.jpg";
import tokyo30 from "../../assets/tokyo30.jpg";
import tokyo31 from "../../assets/tokyo31.jpg";
import tokyo32 from "../../assets/tokyo32.jpg";
import tokyo33 from "../../assets/tokyo33.jpg";
import tokyo34 from "../../assets/tokyo34.jpg";
import tokyo35 from "../../assets/tokyo35.jpg";
import tokyo36 from "../../assets/tokyo36.jpg";
import tokyo37 from "../../assets/tokyo37.jpg";
import tokyo38 from "../../assets/tokyo38.jpg";
import acc1 from "../../assets/acc1.jpg";
import acc2 from "../../assets/acc2.jpg";
import acc3 from "../../assets/acc3.jpg";
import acc4 from "../../assets/acc4.jpg";
import acc5 from "../../assets/acc5.jpg";
import sign1 from "../../assets/sign1.jpg";
import sign2 from "../../assets/sign2.jpg";

export const TechIcon = {
  ADOBECREATIVECLOUD:
    "https://img.shields.io/badge/Adobe%20Creative%20Cloud-DA1F26?style=for-the-badge&logo=Adobe%20Creative%20Cloud&logoColor=white",

  AFTEREFFECTS:
    "https://img.shields.io/badge/Adobe%20after%20affects-CF96FD?style=for-the-badge&logo=Adobe%20after%20effects&logoColor=393665",
  PREMIEREPRO:
    "https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white",
  ILLUSTRATOR:
    "https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white",
  PHOTOSHOP:
    "https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black",
  INDESIGN:
    "https://img.shields.io/badge/Adobe%20InDesign-FF3366?style=for-the-badge&logo=Adobe%20InDesign&logoColor=white",
  BLENDER:
    "https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white",
  CANVA:
    "https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white",

  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",

  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",

  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",

  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",

  CHATGPT:
    "https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: laptop,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "Gallery",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.WORK,
  WorkType.PERSONAL,
  WorkType.SOON,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Windows XP Personal Website",
    date: "Apr 2026",
    gitURL: "https://joshjim.com",
    techstack: [TechIcon.CSS, TechIcon.HTML, TechIcon.JAVASCRIPT],
    gallery: [
      { img: pweb, link: "" },
      { img: pweb2, link: "" },
      { img: pweb3, link: "" },
      { img: pweb4, link: "" },
      { img: pweb5, link: "" },
      { img: pweb6, link: "" },
    ],
    overview: `I’m drawn to nostalgic themes, especially where early 2000s pop culture meets technology, like the playful discovery of surfing the web on a Windows XP family computer. This site captures that spirit, reflecting my approach to creative work: making digital experiences feel fun, familiar, and engaging. My earliest creative memories started with Microsoft Paint, so it felt natural to build something rooted in the same nostalgia that shaped me and resonates with others too.`,
  },
  {
    id: 2,
    title: "Trip to Japan",
    date: "Jun 2025",
    gitURL: "",
    techstack: [
      TechIcon.ADOBECREATIVECLOUD,
      TechIcon.AFTEREFFECTS,
      TechIcon.PHOTOSHOP,
    ],
    gallery: [
      {
        img: tokyo1,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },

      {
        img: tokyo2,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },

      {
        img: tokyo3,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },

      {
        img: tokyo4,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },

      {
        img: tokyo5,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },

      {
        img: tokyo6,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },

      {
        img: tokyo7,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
      {
        img: tokyo8,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
      {
        img: tokyo9,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
      {
        img: tokyo10,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
      {
        img: tokyo11,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
      {
        img: tokyo12,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
      {
        img: tokyo13,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
      {
        img: tokyo14,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
      {
        img: tokyo15,
        link: "https://drive.google.com/file/d/18nPa2Eu21vH97bSlwVs8uX_MhrRpySTn/view?usp=drive_link",
      },
    ],
    overview: `Captured and documented a family trip to Japan through photography and video, using a mix of digital camera and camcorder footage.
  (Click image to watch video)`,
  },

  {
    id: 5,
    title: "Sign Painting - Local Business",
    date: "Apr 2026",
    gitURL: "",
    techstack: [],
    gallery: [
      {
        img: sign1,
        link: "",
      },
      {
        img: sign2,
        link: "",
      },
    ],
    overview: `Coming Soon!`,
  },

  {
    id: 9,
    title: "Creative Reel",
    date: "Feb 2023",
    gitURL:
      "https://drive.google.com/file/d/1_hO7cdUH5vi7HJedtCGgqTqhNq50Bt5I/view?usp=drive_link",
    techstack: [
      TechIcon.ADOBECREATIVECLOUD,
      TechIcon.AFTEREFFECTS,
      TechIcon.ILLUSTRATOR,
      TechIcon.AFTEREFFECTS,
      TechIcon.PHOTOSHOP,
    ],
    gallery: [
      { img: creel1, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel2, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel3, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel4, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel5, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel6, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel7, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel8, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel9, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel10, link: "https://youtu.be/v8OZ1N0sFWc" },
      { img: creel11, link: "https://youtu.be/v8OZ1N0sFWc" },
    ],
    video: "/joshuajimcreativereel.mp4",
    overview: `Creative reel featuring a mix of agency, freelance, and personal work. At dentsu, I worked both in front of and behind the camera planning, filming, and directing content, as well as producing videos for internal town halls and building a trend and influencer search tool using front-end skills. My freelance work with A Glitch spans production, vox pops, filming, editing, and asset creation, alongside a selection of personal projects. (Click image to watch video) `,
    cta: `Click on any of the images to watch video!`,
  },
  {
    id: 10,
    title: "Dentsu Annual Town Hall Showcase Presentation",
    date: "Jun 2025",
    gitURL: "",
    techstack: [
      TechIcon.ADOBECREATIVECLOUD,
      TechIcon.AFTEREFFECTS,
      TechIcon.ILLUSTRATOR,
      TechIcon.AFTEREFFECTS,
      TechIcon.PHOTOSHOP,
    ],
    gallery: [
      {
        img: den1,
        link: "https://drive.google.com/file/d/1stb2QOBoQ-jfGGlYuph5RhgeEeouGUxU/view?usp=drive_link",
      },
      {
        img: den2,
        link: "https://drive.google.com/file/d/1stb2QOBoQ-jfGGlYuph5RhgeEeouGUxU/view?usp=drive_link",
      },

      {
        img: den5,
        link: "https://drive.google.com/file/d/1stb2QOBoQ-jfGGlYuph5RhgeEeouGUxU/view?usp=drive_link",
      },
      {
        img: den6,
        link: "https://drive.google.com/file/d/1stb2QOBoQ-jfGGlYuph5RhgeEeouGUxU/view?usp=drive_link",
      },
      {
        img: den7,
        link: "https://drive.google.com/file/d/1stb2QOBoQ-jfGGlYuph5RhgeEeouGUxU/view?usp=drive_link",
      },
      {
        img: den8,
        link: "https://drive.google.com/file/d/1stb2QOBoQ-jfGGlYuph5RhgeEeouGUxU/view?usp=drive_linkc",
      },
      {
        img: den9,
        link: "https://drive.google.com/file/d/1stb2QOBoQ-jfGGlYuph5RhgeEeouGUxU/view?usp=drive_link",
      },
      {
        img: den10,
        link: "https://drive.google.com/file/d/1stb2QOBoQ-jfGGlYuph5RhgeEeouGUxU/view?usp=drive_link",
      },
    ],
    overview: `Each year, dentsu’s Townhall brings together UK offices to review performance and share new directions. I planned, directed, and helped produce an introductory film for new ecosystem consultants, storyboarding its role in the wider presentation, coordinating logistics, assisting on the shoot, and editing.

The final film served as a clear, engaging opener, simplifying a complex structure, setting the tone for the event, and improving audience understanding. (Click image to watch video)`,
  },
  {
    id: 11,
    title: "Velocity - Internal Platform Trends Tool",
    date: "Jan 2025",
    gitURL: "",
    techstack: [
      TechIcon.ADOBECREATIVECLOUD,
      TechIcon.ILLUSTRATOR,
      TechIcon.AFTEREFFECTS,
      TechIcon.PHOTOSHOP,
    ],
    gallery: [
      {
        img: velo1,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo2,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo3,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo4,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo5,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo6,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo7,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo8,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo9,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo10,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo11,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo12,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
      {
        img: velo13,
        link: "https://drive.google.com/file/d/19KQqPa1__n8X7K96XiKUvga644taUyWp/view?usp=drive_link",
      },
    ],
    overview: `Velocity is an internal dentsu tool used across teams to identify trends on platforms like YouTube, Google, Twitter, and Facebook. I led onboarding and training for internal teams and clients, and created a promotional video alongside onboarding email copy and banner assets.

This rollout improved understanding from the outset, driving stronger engagement, faster adoption, and more consistent use across teams and clients. (Click image to watch video)`,
  },
  {
    id: 12,
    title: "Artemis - Creator Analysis Tool ",
    date: "Apr 2023 - Jul 2023",
    gitURL: "https://github.com/firwer/supercanvas",
    techstack: [
      TechIcon.CSS,
      TechIcon.HTML,
      TechIcon.JAVASCRIPT,
      TechIcon.GOOGLECLOUDFUNCTIONS,
      TechIcon.REACT,
      TechIcon.FIGMA,
    ],
    gallery: [
      {
        img: art6,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art8,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art1,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art4,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art5,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art3,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art7,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art9,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art10,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art11,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art12,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art13,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art14,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art15,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art16,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art17,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art18,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art19,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
      {
        img: art20,
        link: "https://drive.google.com/file/d/15blkRGsHqwMKvxwsPflmpNp2ERYclYd5/view?usp=drive_link",
      },
    ],
    overview: `Artemis is an internal dentsu tool using machine learning to analyse creator content and match talent to campaigns. As part of a Meta collaboration, I redesigned the landing page and wireframes, then built a full-stack proof of concept with Google Cloud Storage.

The prototype allowed users to drag and drop content and receive a suitability score, turning a complex idea into a clear, interactive experience that improved understanding and drove stakeholder buy-in. (Click image to watch video)`,
  },
  {
    id: 13,
    title: "Social-First Campaign Production for dentsu Clients",
    date: "June 2025",
    gitURL: "",
    techstack: [
      TechIcon.ADOBECREATIVECLOUD,
      TechIcon.ILLUSTRATOR,
      TechIcon.AFTEREFFECTS,
      TechIcon.PREMIEREPRO,
    ],
    gallery: [
      {
        img: org1,
        link: "",
      },
      {
        img: org2,
        link: "",
      },
      {
        img: org3,
        link: "",
      },
      {
        img: org4,
        link: "",
      },
      {
        img: org5,
        link: "",
      },
      {
        img: org6,
        link: "",
      },
    ],
    overview: `While at dentsu, I worked closely with organic social teams to plan and shoot content for client social channels. I was first introduced to Fuel10k as a recurring cast member, and the success of this role led to increased on-screen involvement and further opportunities across additional clients, including Heinz and Ambrosia.`,
  },
  {
    id: 14,
    title: "Accelerator End of Year Reel",
    date: "Dec 2025",
    gitURL: "",
    techstack: [
      TechIcon.ADOBECREATIVECLOUD,
      TechIcon.PHOTOSHOP,
      TechIcon.AFTEREFFECTS,
      TechIcon.PREMIEREPRO,
      TechIcon.ILLUSTRATOR,
    ],
    gallery: [
      {
        img: acc1,
        link: "https://drive.google.com/file/d/17lcq8rjhB6TCuVW3_uJxbnTlWQ6TQ6FL/view?usp=drive_link",
      },
      {
        img: acc2,
        link: "https://drive.google.com/file/d/17lcq8rjhB6TCuVW3_uJxbnTlWQ6TQ6FL/view?usp=drive_link",
      },
      {
        img: acc3,
        link: "https://drive.google.com/file/d/17lcq8rjhB6TCuVW3_uJxbnTlWQ6TQ6FL/view?usp=drive_link",
      },
      {
        img: acc4,
        link: "https://drive.google.com/file/d/17lcq8rjhB6TCuVW3_uJxbnTlWQ6TQ6FL/view?usp=drive_link",
      },
      {
        img: acc5,
        link: "https://drive.google.com/file/d/17lcq8rjhB6TCuVW3_uJxbnTlWQ6TQ6FL/view?usp=drive_link",
      },
    ],
    overview: `The accelerator reel celebrated team-wide professional and personal wins, aligned with dentsu’s brand guidelines. I concepted, edited, and structured the piece, curating submissions across teams, shaping the narrative, and delivering under tight deadlines while balancing brand consistency with energy and personality.
The final reel landed well at a company-wide level, boosting engagement and reinforcing a strong sense of team culture and recognition.





(Click image to watch video)
`,
  },
  {
    id: 15,
    title: "A Glitch",
    date: "Aug 2025 - Present",
    gitURL: "",
    techstack: [TechIcon.ADOBECREATIVECLOUD, TechIcon.AFTEREFFECTS],
    gallery: [
      {
        img: agit1,
        link: "https://drive.google.com/file/d/1b_K2bjPQ-Q7oWbk5xKXcVuveNv6p90kc/view?usp=drive_link",
      },
      {
        img: agit2,
        link: "https://drive.google.com/file/d/1b_K2bjPQ-Q7oWbk5xKXcVuveNv6p90kc/view?usp=drive_link",
      },
      {
        img: agit3,
        link: "https://drive.google.com/file/d/1b_K2bjPQ-Q7oWbk5xKXcVuveNv6p90kc/view?usp=drive_link",
      },
      {
        img: agit4,
        link: "https://drive.google.com/file/d/1b_K2bjPQ-Q7oWbk5xKXcVuveNv6p90kc/view?usp=drive_link",
      },
      {
        img: agit5,
        link: "https://drive.google.com/file/d/1b_K2bjPQ-Q7oWbk5xKXcVuveNv6p90kc/view?usp=drive_link",
      },

      {
        img: agit9,
        link: "https://www.instagram.com/aglitchinthe_?igsh=MTE0amZneWFwaGsxMw%3D%3D",
      },
      {
        img: agit10,
        link: "https://www.instagram.com/aglitchinthe_?igsh=MTE0amZneWFwaGsxMw%3D%3D",
      },
      {
        img: agit11,
        link: "https://www.instagram.com/aglitchinthe_?igsh=MTE0amZneWFwaGsxMw%3D%3D",
      },
      {
        img: agit12,
        link: "https://www.instagram.com/aglitchinthe_?igsh=MTE0amZneWFwaGsxMw%3D%3D",
      },
      {
        img: agit13,
        link: "https://www.instagram.com/aglitchinthe_?igsh=MTE0amZneWFwaGsxMw%3D%3D",
      },
      {
        img: agit14,
        link: "https://www.instagram.com/aglitchinthe_?igsh=MTE0amZneWFwaGsxMw%3D%3D",
      },
    ],
    overview: `A Glitch (@agit_) is a creative production outlet focused on social-first content and digital storytelling. Working across filming, editing, and asset creation, it blends hands-on production with collaborative, on-the-ground work, including vox pops and live shoots. The project provides a flexible space to experiment with ideas, refine craft, and deliver engaging, platform-native content across a range of formats. (Click image to watch video)`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "Windows XP Personal Website",
    content: WorkData.find((x) => x.id === 1)!,
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: filmstrip,
    title: "Japan Trip",
    content: WorkData.find((x) => x.id === 2)!,
  },
  {
    id: 5,
    type: WorkType.SOON,
    icon: paintbrush,
    title: "Sign Painting",
    content: WorkData.find((x) => x.id === 5)!,
  },
  {
    id: 9,
    type: WorkType.WORK,
    icon: filmstrip,
    title: "Creative Reel",
    content: WorkData.find((x) => x.id === 9)!,
  },
  {
    id: 10,
    type: WorkType.WORK,
    icon: laptop,
    title: "Dentsu - Town Hall",
    content: WorkData.find((x) => x.id === 10)!,
  },
  {
    id: 11,
    type: WorkType.WORK,
    icon: laptop,
    title: "Dentsu - Velocity",
    content: WorkData.find((x) => x.id === 11)!,
  },
  {
    id: 12,
    type: WorkType.WORK,
    icon: laptop,
    title: "Dentsu - Artemis",
    content: WorkData.find((x) => x.id === 12)!,
  },
  {
    id: 13,
    type: WorkType.WORK,
    icon: laptop,
    title: "Dentsu - Social",
    content: WorkData.find((x) => x.id === 13)!,
  },
  {
    id: 14,
    type: WorkType.WORK,
    icon: laptop,
    title: "Dentsu - Accelerators",
    content: WorkData.find((x) => x.id === 14)!,
  },
  {
    id: 15,
    type: WorkType.WORK,
    icon: paintbrush,
    title: "A Glitch",
    content: WorkData.find((x) => x.id === 15)!,
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo16,
  },
  {
    id: 1,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo17,
  },
  {
    id: 2,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo18,
  },
  {
    id: 3,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo19,
  },
  {
    id: 4,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo20,
  },
  {
    id: 5,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo21,
  },
  {
    id: 6,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo22,
  },
  {
    id: 7,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo23,
  },
  {
    id: 8,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo24,
  },
  {
    id: 9,
    title: "Deer Park Nara",
    location: "Kyoto, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo25,
  },
  {
    id: 10,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo26,
  },
  {
    id: 11,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo27,
  },
  {
    id: 12,
    title: "Osaka Castle",
    location: "Osaka, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo28,
  },
  {
    id: 13,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo29,
  },
  {
    id: 14,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo30,
  },
  {
    id: 15,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo31,
  },
  {
    id: 16,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo32,
  },
  {
    id: 17,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo33,
  },
  {
    id: 18,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo34,
  },
  {
    id: 19,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo35,
  },
  {
    id: 20,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo36,
  },
  {
    id: 21,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo37,
  },
  {
    id: 22,
    title: "Tokyo",
    location: "Tokyo, Japan",
    desc: "",
    date: "May 2025",
    img: tokyo38,
  },
] as GalleryImage[];
