import SvgIcon from "../../components/SvgIcon";

export default function Icon({ active, selected, path, pathProps }) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      active={active}
      selected={selected}
      aria-hidden="true"
      role="img"
    >
      <SvgIcon.Path
        fill={active || selected ? "#ffffff" : "#3BA55D"}
        d={path}
        {...pathProps}
      ></SvgIcon.Path>
    </SvgIcon>
  );
}
