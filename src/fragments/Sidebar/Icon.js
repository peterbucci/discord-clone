import SvgIcon from "../../components/SvgIcon";

export default function Icon({ selected, path, pathProps }) {
  return (
    <SvgIcon selected={selected}>
      <SvgIcon.Path
        fill={selected ? "#ffffff" : "#3BA55D"}
        d={path}
        {...pathProps}
      ></SvgIcon.Path>
    </SvgIcon>
  );
}
