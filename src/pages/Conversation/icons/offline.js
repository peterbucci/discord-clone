import StatusIcon from "../../../components/StatusIcon";

export default function OfflineIcon() {
  return (
    <StatusIcon width="10" height="15" viewBox="0 0 10 15">
      <StatusIcon.Mask id="95a5b98a-6e23-4b6f-878d-fa3bf6e12724">
        <StatusIcon.Rect
          x="0"
          y="2.5"
          width="10"
          height="10"
          rx="5"
          ry="5"
          fill="white"
        ></StatusIcon.Rect>
        <StatusIcon.Rect
          x="2.5"
          y="5"
          width="5"
          height="5"
          rx="2.5"
          ry="2.5"
          fill="black"
        ></StatusIcon.Rect>
        <StatusIcon.Polygon
          points="-2.16506,-2.5 2.16506,0 -2.16506,2.5"
          fill="black"
          transform="scale(0) translate(5.625 7.5)"
          style={{ transformOrigin: "5.625px 7.5px" }}
        ></StatusIcon.Polygon>
        <StatusIcon.Circle
          fill="black"
          cx="5"
          cy="7.5"
          r="0"
        ></StatusIcon.Circle>
      </StatusIcon.Mask>
      <StatusIcon.Rect
        x="0"
        y="0"
        width="10"
        height="15"
        fill="rgba(116, 127, 141, 1)"
        mask="url(#95a5b98a-6e23-4b6f-878d-fa3bf6e12724)"
      ></StatusIcon.Rect>
    </StatusIcon>
  );
}
