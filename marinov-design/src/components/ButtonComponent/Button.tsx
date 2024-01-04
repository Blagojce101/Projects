import React, { CSSProperties } from "react";

interface IButton {
  text: string;
  route?: string;
  handleRoute: () => void;
  className?: string; // For CSS Module class names
  style?: CSSProperties; // For inline styles
}

const ButtonComp = ({ text, route, handleRoute, className, style }: IButton) => {
  // Use className for CSS module classes
  const buttonClass = route ? `${className} ${route}` : className;

  return (
    <div className={buttonClass || "default-class"}>
      <button onClick={handleRoute} style={style}>
        {text}
      </button>
    </div>
  );
};

export default ButtonComp;