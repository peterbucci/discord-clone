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

export default function Avatar({ children, ...restProps }) {
  return <Svg {...restProps}>{children}</Svg>;
}

Avatar.Mask = ({ children, ...restProps }) => {
  return <Mask {...restProps}>{children}</Mask>;
};

Avatar.BaseTransparency = () => {
  return <TransparentRect x="0" y="0" width="100%" height="100%" />;
};

Avatar.CircleVisiblity = ({ size }) => {
  const circleSize = size === "Large" ? "40" : "16";
  return <VisibleCircle cx={circleSize} cy={circleSize} r={circleSize} />;
};

Avatar.StatusCircleOutline = ({ size }) => {
  return (
    <TransparentCircle
      cx={size === "Large" ? "68" : "27"}
      cy={size === "Large" ? "68" : "27"}
      r={size === "Large" ? "14" : "8"}
    />
  );
};

Avatar.StatusBaseTransparency = () => {
  return <TransparentRect width="10" height="10" x="22" y="22" />;
};

Avatar.StatusCircleVisiblity = ({ size }) => {
  return (
    <VisibleCircle
      cx={size === "Large" ? "68" : "27"}
      cy={size === "Large" ? "68" : "27"}
      r={size === "Large" ? "8" : "5"}
    />
  );
};

Avatar.StatusAFK = ({ size }) => {
  return (
    <TransparentCircle
      cx={size === "Large" ? "64" : "24"}
      cy={size === "Large" ? "64" : "24"}
      r={size === "Large" ? "6" : "4"}
    />
  );
};

Avatar.StatusOffline = ({ size }) => {
  return (
    <TransparentCircle
      cx={size === "Large" ? "68" : "27"}
      cy={size === "Large" ? "68" : "27"}
      r={size === "Large" ? "4" : "3"}
    />
  );
};

Avatar.StatusDND = ({ size }) => {
  return (
    <TransparentRect
      x={size === "Large" ? "63" : "23.5"}
      y={size === "Large" ? "66" : "25.5"}
      width={size === "Large" ? "10.5" : "7"}
      height={size === "Large" ? "4" : "3"}
    />
  );
};

Avatar.Image = ({ image, size }) => {
  return (
    <ForeignObject mask={`url(#avatarMask${size ?? ""})`} size={size}>
      <ImageWrapper>
        <Image
          src={image ? `/assets/${image}.png` : "/assets/default_avatar.png"}
          alt=" "
          aria-hidden="true"
          size={size}
        />
      </ImageWrapper>
    </ForeignObject>
  );
};

Avatar.Status = ({ status, size }) => {
  return (
    <StatusRect
      status={status}
      mask={`url(#userStatusMask${size ?? ""}${status})`}
      size={size}
    />
  );
};
