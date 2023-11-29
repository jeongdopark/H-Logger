import React from "react";
import { createRoot } from "react-dom/client";
import { TOAST_DURATION } from "../const";
interface IProps {
  content: React.ReactNode | string;
}
let container: null | HTMLDivElement = null;

const useToast = ({ content }: IProps) => {
  if (container === null) {
    container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column-reverse";
    container.style.position = "fixed";
    container.style.top = "100px";
    container.style.right = "40px";

    container.style.zIndex = "999";
    document.body.appendChild(container);
  }

  const div = document.createElement("div");
  container.appendChild(div);
  const root = createRoot(div); // createRoot를 사용하여 root 생성

  const removeNotication = () => {
    root.unmount();
    if (div?.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  root.render(<div>{content}</div>);

  setTimeout(removeNotication, TOAST_DURATION.DURATION.SET_TIMEOUT);
};

export default useToast;
