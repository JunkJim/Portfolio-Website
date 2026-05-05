import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/userprofile.jpg";
import userprofile2 from "../../assets/userprofile2.jpg";
import userprofile3 from "../../assets/userprofile3.jpg";
import userprofile4 from "../../assets/userprofile4.jpg";
import userprofile5 from "../../assets/userprofile5.png";
import userprofile6 from "../../assets/userprofile6.jpg";
import userprofile7 from "../../assets/userprofile7.jpg";
import userprofile8 from "../../assets/userprofile8.jpg";
import userprofile9 from "../../assets/userprofile9.jpg";



const INTRO = [
  `I’m a social-first creative specialising in video, digital storytelling and audience-led content.`,

  `I create platform-native work that’s clear, engaging and culturally relevant.`,

  `My work focuses on taking ideas from concept through to delivery, with an emphasis on iteration and impact.`,
];
const WHYSITE = `I’m drawn to nostalgic themes, especially the intersection of pop culture and technology from the early 2000's. Simpler times, with vivid memories of “surfing the web” on the family computer running Windows XP, an experience that felt playful and full of discovery.

With this website, I want to capture that spirit. It reflects my approach to creative work: bringing a sense of fun, personality, and familiarity to digital experiences in a way that feels engaging and relatable.`;

const INTERESTS = [
  `Outside of my creative work, I’m passionate about travel and experiencing new cultures. I recently returned from Milan, where I ran my first marathon with friends.`,

  `I’m particularly drawn to the opportunity travel gives me to practise languages, explore new food, and immerse myself in different ways of living.`,

  `I’m currently improving my Mandarin and Italian, and I enjoy the challenge of stepping outside my comfort zone to connect with local communities.`,

  `Travelling has broadened my perspective, making me more adaptable, independent, and culturally aware.`,
];
const INTERESTS2 = [
  `I’m equally passionate about staying active and pushing myself physically. I’ve completed multiple half marathons and recently a full marathon.`,

  `I’m motivated by setting new challenges, with the goal of completing my first triathlon soon.`,

  `My hobbies include running, cycling, climbing, swimming, weight training, and skateboarding.`,

  `Alongside this, I have a strong interest in food, whether that’s cooking or exploring food culture through documentaries, balancing performance with enjoyment.`,
];
const INTERESTS3 = [
  `When I travel, I document my experiences through camcorder footage, film photography, and compact digital cameras, later editing everything into personal recap videos for social media.`,

  `My most recent project captured a family trip to Japan.`,

  `I’m deeply interested in storytelling and nostalgia, with influences spanning gaming, anime, sci-fi, fashion, and early 2000s technology and TV.`,

  `I enjoy collecting and engaging with physical media like CDs and vinyl, and I often bring these influences into my creative work.`,
];

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive,
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Joshua Jim&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              {/* <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/firwer",
                    "_blank",
                    "noreferrer",
                  );
                }}
              /> */}
              <WelcomeIcon
                img={linkedin}
                text={"My LinkedIn"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/joshua-jim-j220367/",
                    "_blank",
                    "noreferrer",
                  );
                }}
              />
              <WelcomeIcon
                img={pdf}
                text={"My CV"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("/resume.pdf");
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={github}
                text={"My Work"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={gallery}
                text={"Gallery"}
                tooltip="Click to view!"
                onClick={() => handleRunApp(4)}
              />
              <WelcomeIcon
                img={outlook}
                text={"E-mail"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile_pic"
                src={userprofile.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile3.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile4.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile5.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile6.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile7.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile8.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile9.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>
                {INTRO.map((text, i) => (
                  <p key={i} className={styles.subtitle}>
                    {text}
                  </p>
                ))}
              </p>

              <h3 className={styles.subtitle_header}>
                Why create a personal website like this?
              </h3>
              <p className={styles.subtitle}>
                {WHYSITE.split("\n\n").map((text, i) => (
                  <p key={i} className={styles.subtitle}>
                    {text}
                  </p>
                ))}
              </p>
              <h3 className={styles.subtitle_header}>Travel & Culture</h3>
              <p className={styles.subtitle}>
                {INTERESTS.map((text, i) => (
                  <p key={i} className={styles.subtitle}>
                    {text}
                  </p>
                ))}
              </p>
              <br></br>
              <h3 className={styles.subtitle_header}>Fitness & Lifestyle</h3>

              <p className={styles.subtitle}>
                {INTERESTS2.map((text, i) => (
                  <p key={i} className={styles.subtitle}>
                    {text}
                  </p>
                ))}
              </p>
              <br></br>
              <h3 className={styles.subtitle_header}>Hobbies</h3>

              <p className={styles.subtitle}>
                {INTERESTS3.map((text, i) => (
                  <p key={i} className={styles.subtitle}>
                    {text}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
