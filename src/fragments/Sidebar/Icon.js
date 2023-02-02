import { useContext } from "react";
import { ThemeContext } from "styled-components";
import SvgIcon from "../../components/SvgIcon";

export default function Icon({ selected, path, pathProps }) {
  const themeContext = useContext(ThemeContext);
  return (
    <SvgIcon selected={selected}>
      <SvgIcon.Path
        fill={selected ? themeContext.white : themeContext.statusGreen600}
        d={path}
        {...pathProps}
      ></SvgIcon.Path>
    </SvgIcon>
  );
}
