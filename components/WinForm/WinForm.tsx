import { ReactNode, useRef, useState } from "react";
import Draggable from "react-draggable";
import styles from "./WinForm.module.css";
import WinToolBar from "components/WinToolbar/WinToolBar";
import Image, { StaticImageData } from "next/image";
import {
  maximizeTab,
  minimizeTab,
  removeTab,
  setFocusedTab,
} from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { App, RootState } from "@/types";

const unfocusedAdjustment = "brightness(1.05)";

type Props = {
  id: number;
  title: string;
  message: string;
  children: ReactNode;
  icon: StaticImageData;
  zIndex: number;
  programType: App;
  prompt: boolean;
};

const WinForm = (props: Props) => {
  const nodeRef = useRef(null);

  const [isMaximized, setMaximised] = useState(false);
  const [isMinimized, setMinimised] = useState(false);
  const [currX, setX] = useState(0);
  const [currY, setY] = useState(0);

  const currTabID = useSelector(
    (state: RootState) => state.tab.currentFocusedTab,
  );

  const handleMaximize = () => {
    setMaximised((prev) => !prev);
    setMinimised(false);
    store.dispatch(maximizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: props.id }));
  };

  const handleMinimize = () => {
    setMinimised((prev) => !prev);
    setMaximised(false);
    store.dispatch(minimizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: -1 }));
  };

  const handleClose = () => {
    store.dispatch(removeTab({ id: props.id }));
  };

  const handleStop = (_: any, dragElement: any) => {
    if (isMaximized || isMinimized) return;

    setX(dragElement.x);
    setY(dragElement.y);
  };

  const draggableProps = isMaximized
    ? {
        position: { x: 0, y: 0 },
        handle: ".handle",
        bounds: "parent",
      }
    : {
        defaultPosition: { x: currX, y: currY },
        handle: ".handle",
        bounds: "parent",
        onStop: handleStop,
      };

  const normalDisplay = isMinimized ? "none" : "inline";
  const normalWidth = isMaximized ? "100%" : "750px";
  const normalHeight = isMaximized ? "calc(100% - 40px)" : "75%";

  const promptDisplay = "inline";
  const promptWidth = "450px";
  const promptHeight = "auto";

  return (
    <Draggable nodeRef={nodeRef} {...draggableProps}>
      <div
        ref={nodeRef}
        style={{
          top: isMaximized ? "0" : "10%",
          left: isMaximized ? "0" : "20%",
          position: "absolute",
          display: props.prompt ? promptDisplay : normalDisplay,
          width: props.prompt ? promptWidth : normalWidth,
          height: props.prompt ? promptHeight : normalHeight,
          zIndex: props.zIndex,
         
        }}
        className={styles.window}
      >
        {/* TITLE BAR */}
        <div
          onMouseDown={() =>
            store.dispatch(setFocusedTab({ id: props.id }))
          }
          className={
            currTabID === props.id
              ? styles.titlebar
              : styles.titlebar_unfocused
          }
        >
          <div
            className="handle"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {!props.prompt && (
              <Image
                width={20}
                height={20}
                alt="icon"
                src={props.icon}
                className={styles.icon}
              />
            )}
            <div className={styles.title}>{props.title}</div>
          </div>

          <div className={styles.titlecontrols}>
            {!props.prompt && (
              <div
                onClick={handleMinimize}
                style={{
                  filter:
                    currTabID === props.id ? "" : unfocusedAdjustment,
                }}
                className={styles.minimise}
              />
            )}

            {!props.prompt && (
              <div
                onClick={handleMaximize}
                style={{
                  filter:
                    currTabID === props.id ? "" : unfocusedAdjustment,
                }}
                className={
                  isMaximized ? styles.resize : styles.maximise
                }
              />
            )}

            <div
              onClick={handleClose}
              style={{
                filter:
                  currTabID === props.id ? "" : unfocusedAdjustment,
              }}
              className={styles.close}
            />
          </div>
        </div>

        {/* BODY */}
        <div
          onMouseDown={() =>
            store.dispatch(setFocusedTab({ id: props.id }))
          }
          className={
            currTabID === props.id
              ? styles.windowborder
              : styles.windowborder_unfocused
          }
        >
          <div className={styles.windowsbody}>
            {!props.prompt && (
              <WinToolBar
                title={props.title}
                icon={props.icon}
                programType={props.programType}
                id={props.id}
              />
            )}
            {props.children}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default WinForm;