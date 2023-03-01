import { forwardRef } from "react";
import {
  Layer,
  Container,
  AnimatedHeight,
  AbsoluteContainer,
} from "./styles/add_a_server";

const AddAServer = forwardRef(
  ({ children, onLayerClick, exited, ...restProps }, ref) => {
    return (
      <Layer onClick={onLayerClick} exited={exited}>
        {!exited && (
          <Container
            ref={ref}
            {...restProps}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </Container>
        )}
      </Layer>
    );
  }
);

AddAServer.AnimatedHeight = ({ children, ...restProps }) => {
  return <AnimatedHeight {...restProps}>{children}</AnimatedHeight>;
};

AddAServer.AbsoluteContainer = ({ children, ...restProps }) => {
  return <AbsoluteContainer {...restProps}>{children}</AbsoluteContainer>;
};

export default AddAServer;
