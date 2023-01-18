import { default as NewAvatar } from "../../components/Avatar";

export default function Avatar({ status, image, size }) {
  return (
    <NewAvatar size={size}>
      <NewAvatar.Mask id={`avatarMask${size ?? ""}`}>
        <NewAvatar.CircleVisiblity size={size} />
        <NewAvatar.StatusCircleOutline size={size} />
      </NewAvatar.Mask>
      <NewAvatar.Mask id={`userStatusMask${size ?? ""}${status}`}>
        <NewAvatar.StatusCircleVisiblity size={size} />
        {status === "AFK" && <NewAvatar.StatusAFK size={size} />}
        {status === "Offline" && <NewAvatar.StatusOffline size={size} />}
        {status === "DND" && <NewAvatar.StatusDND size={size} />}
      </NewAvatar.Mask>
      <NewAvatar.Image image={image} size={size} />
      <NewAvatar.Status status={status} size={size} />
    </NewAvatar>
  );
}
