import {
  Svg,
  Mask,
  TransparentRect,
  VisibleCircle,
  TransparentCircle,
  StatusRect,
  ForeignObject,
  ImageWrapper,
  Image,
} from "./styles/avatar";

export default function Avatar({ children }) {
  return <Svg>{children}</Svg>;
}

Avatar.Mask = ({ children, ...restProps }) => {
  return <Mask {...restProps}>{children}</Mask>;
};

Avatar.BaseTransparency = () => {
  return <TransparentRect x="0" y="0" width="100%" height="100%" />;
};

Avatar.CircleVisiblity = () => {
  return <VisibleCircle cx="16" cy="16" r="16" />;
};

Avatar.StatusCircleOutline = () => {
  return <TransparentCircle cx="27" cy="27" r="8" />;
};

Avatar.StatusBaseTransparency = () => {
  return <TransparentRect width="10" height="10" x="22" y="22" />;
};

Avatar.StatusCircleVisiblity = () => {
  return <VisibleCircle cx="27" cy="27" r="5" />;
};

Avatar.statusAFK = () => {
  return <TransparentCircle cx="24" cy="24" r="4" />;
};

Avatar.statusOffline = () => {
  return <TransparentCircle cx="27" cy="27" r="3" />;
};

Avatar.statusDND = () => {
  return <TransparentRect x="23.5" y="25.5" width="7" height="3" />;
};

Avatar.Image = ({ image }) => {
  return (
    <ForeignObject mask="url(#avatarMask)">
      <ImageWrapper>
        <Image
          src={image ? `/assets/${image}.png` : "/assets/default_avatar.png"}
          alt=" "
          aria-hidden="true"
        />
      </ImageWrapper>
    </ForeignObject>
  );
};

Avatar.Status = ({ status }) => {
  return <StatusRect status={status} mask={`url(#userStatusMask${status})`} />;
};
