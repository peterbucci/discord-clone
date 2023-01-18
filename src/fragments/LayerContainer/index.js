import { useEffect } from "react";
import { default as NewLayerContainer } from "../../components/LayerContainer";

export default function LayerContainer({ children, anchorRef, onClickOut }) {
  const calculateXY = () => {
    const boundingClientRect = anchorRef?.current.getBoundingClientRect();
    const bottom = boundingClientRect.y + 320;
    const right = boundingClientRect.x + 340;
    const left =
      right > window.innerWidth
        ? boundingClientRect.x - 340 - 10
        : boundingClientRect.x + boundingClientRect.width + 10;
    const yPos =
      bottom > window.innerHeight
        ? {
            bottom: 10,
          }
        : {
            top: boundingClientRect.y,
          };
    return {
      ...yPos,
      left,
    };
  };

  useEffect(() => {
    const onClick = (e) => {
      const childRef = children.props.thisRef.current;
      if (!childRef.contains(e.target)) onClickOut(null);
    };
    if (anchorRef) document.addEventListener("mouseup", onClick);
    return () => document.removeEventListener("mouseup", onClick);
  }, [children.props.thisRef, anchorRef, onClickOut]);
  return (
    <NewLayerContainer>
      {anchorRef && (
        <NewLayerContainer.AbsoluteContainer style={calculateXY()}>
          <NewLayerContainer.InnerContainer>
            {children}
          </NewLayerContainer.InnerContainer>
        </NewLayerContainer.AbsoluteContainer>
      )}
    </NewLayerContainer>
  );
}
