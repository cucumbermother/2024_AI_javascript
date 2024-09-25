import { CSSProperties } from "react";

type propsStyle = {
  backgroundcolor: "red" | "blue" | "green" | "orange";
  width: string;
  height: string;
  innertext : string;
};



const Box = ( props: propsStyle ) => {
  const boxStyle: CSSProperties = {
    backgroundColor: props.backgroundcolor,
    width: props.width,
    height: props.height,
  };

  return <div style={boxStyle}>${props.innertext}</div>;
};


export default Box