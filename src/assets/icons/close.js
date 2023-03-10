import { useContext } from "react";
import { ThemeContext } from "styled-components";
import SvgIcon from "components/SvgIcon";

export default function CloseIcon({ width = 16, height = 16, fill }) {
  const themeContext = useContext(ThemeContext);
  return (
    <SvgIcon width={width} height={height}>
      <SvgIcon.Path
        fill={fill ? themeContext[fill] : "currentColor"}
        d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
      ></SvgIcon.Path>
    </SvgIcon>
  );
}
