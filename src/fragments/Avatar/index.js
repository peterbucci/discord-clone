import { default as NewAvatar } from "../../components/Avatar";

export default function Avatar({ status, image }) {
  return (
    <NewAvatar>
      <NewAvatar.Mask id="avatarMask">
        <NewAvatar.BaseTransparency />
        <NewAvatar.CircleVisiblity />
        <NewAvatar.StatusCircleOutline />
      </NewAvatar.Mask>
      <NewAvatar.Mask id={`userStatusMask${status}`}>
        <NewAvatar.StatusBaseTransparency />
        <NewAvatar.StatusCircleVisiblity />
        {status === "AFK" && <NewAvatar.StatusAFK />}
        {status === "Offline" && <NewAvatar.StatusOffline />}
        {status === "DND" && <NewAvatar.StatusDND />}
      </NewAvatar.Mask>
      <NewAvatar.Image image={image} />
      <NewAvatar.Status status={status} />
    </NewAvatar>
  );
}
