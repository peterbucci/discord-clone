import SvgIcon from "components/SvgIcon";

export default function DownArrowIcon(props) {
  return (
    <SvgIcon width="12" height="12" {...props}>
      <SvgIcon.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
      ></SvgIcon.Path>
    </SvgIcon>
  );
}
