import SvgIcon from "components/SvgIcon";

export default function RightArrowIcon() {
  return (
    <SvgIcon
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      style={{ marginLeft: "auto", marginRight: "16px" }}
    >
      <SvgIcon.Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z"
      ></SvgIcon.Path>
    </SvgIcon>
  );
}
