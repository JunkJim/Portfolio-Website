import { TechIcon, WorkAccordionContent, WorkAccordionTitles } from "@/appData";
import { RootState, WorkContent, App } from "@/types";
import WinAccordion from "components/WinAccordion/WinAccordion";
import { useEffect, useState } from "react";
import styles from "./MyWork.module.css";
import Image from "next/image";
import github from "../../assets/github.png";
import github_w from "../../assets/github_w.png";
import Carousel from "components/Carousel/Carousel";
import { useSelector } from "react-redux";
import { setBackBtn } from "@/redux/tabSlice";
import store from "@/redux/store";
import { addTab } from "@/redux/tabSlice";
import { AppDirectory } from "@/appData";
import { v4 as uuidv4 } from "uuid";

const loaderProp = ({ src }: any) => {
  return src;
};

interface Props {
  id: number;
}

const MyWork = ({ id }: Props) => {
  const [currDisplay, setCurrDisplay] = useState<WorkContent>({
    id: 0,
    title: "",
    date: "",
    gitURL: "",
    gallery: [],
    techstack: [],
    overview: "",
  });

  const [gitIcon, setgitIcon] = useState(github_w);

  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive,
  );

  // ✅ When a project is selected → enable back button
  useEffect(() => {
    if (currDisplay.title !== "") {
      store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
    }
  }, [currDisplay, id]);

  // ✅ When back button is clicked → reset view
  useEffect(() => {
    if (!backBtnActive) {
      setCurrDisplay({
        id: 0,
        title: "",
        date: "",
        gitURL: "",
        gallery: [],
        techstack: [],
        overview: "",
      });
    }
  }, [backBtnActive]);

  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <div className={styles.accordion}>
          {WorkAccordionTitles.map((title, index) => (
            <WinAccordion key={index} title={title}>
              {WorkAccordionContent.filter((f) => f.type === title).map(
                ({ title, icon, content }, index) => (
                  <div
                    key={index}
                    className={styles.accordion_content_item}
                    onClick={() => setCurrDisplay(content)}
                  >
                    <div className={styles.accordion_content_text}>
                      <Image
                        alt="accordionbtn"
                        src={icon.src}
                        height={15}
                        width={15}
                      />
                      <p>{title}</p>
                    </div>
                  </div>
                ),
              )}
            </WinAccordion>
          ))}
        </div>
      </div>

      <div className={styles.rightpanel}>
        {currDisplay.title === "" ? (
          <div className={styles.body}>
            <h4>Welcome To My Portfolio Section</h4>
            <h5>
              Begin Navigation by clicking on one of my projects on the left
              panel
            </h5>
            <h5>Core Skills</h5>
            <div className={styles.content_tech}>
              {Object.values(TechIcon).map((badge) => (
                <div key={badge} className={styles.tech_badge}>
                  <Image
                    style={{ width: "100%", borderRadius: "20px" }}
                    alt="tech"
                    src={badge}
                    width={50}
                    height={35}
                    loader={loaderProp}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <h4>{currDisplay.title}</h4>
            </div>

            {currDisplay.gallery.length !== 0 && (
              <div className={styles.body}>
                <h4>Project Gallery</h4>
                <Carousel images={currDisplay.gallery} />
              </div>
            )}

            <div className={styles.body}>
              <h4>Overview:</h4>
              {currDisplay.overview}
            </div>

            <div className={styles.body}>
              <h4>Tools & Software Used</h4>
              <div className={styles.content_tech}>
                {currDisplay.techstack.map((tech) => (
                  <div key={tech} className={styles.tech_badge}>
                    <Image
                      style={{ width: "100%", borderRadius: "20px" }}
                      alt="tech"
                      src={tech}
                      width={50}
                      height={40}
                      loader={loaderProp}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
