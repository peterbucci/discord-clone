import SvgIcon from "components/SvgIcon";

export default function CloseToDownArrowIcon() {
  return (
    <SvgIcon width="18" height="18" viewBox="0 0 18 18">
      <SvgIcon.Group fill="none" fillRule="evenodd">
        <SvgIcon.Path fill="none" d="M0 0h18v18H0"></SvgIcon.Path>
        <SvgIcon.Path
          fill="none"
          stroke="currentColor"
          d="M4.5 4.5l9 9"
          strokeLinecap="round"
        ></SvgIcon.Path>
        <SvgIcon.Path
          fill="none"
          stroke="currentColor"
          d="M13.5 4.5l-9 9"
          strokeLinecap="round"
        ></SvgIcon.Path>
      </SvgIcon.Group>
    </SvgIcon>
  );
}
