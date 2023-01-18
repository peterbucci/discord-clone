import {
  AbsoluteContainer,
  AnimationLeft,
  AnimationRight,
  Container,
  InnerContainer,
} from "./styles/layer_container";

export default function LayerContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

LayerContainer.AbsoluteContainer = ({ children, ...restProps }) => {
  return <AbsoluteContainer {...restProps}>{children}</AbsoluteContainer>;
};

LayerContainer.AnimationRight = ({ children, ...restProps }) => {
  return <AnimationRight {...restProps}>{children}</AnimationRight>;
};

LayerContainer.AnimationLeft = ({ children, ...restProps }) => {
  return <AnimationLeft {...restProps}>{children}</AnimationLeft>;
};

LayerContainer.InnerContainer = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
