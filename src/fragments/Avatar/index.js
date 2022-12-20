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
        {status === "AFK" && <NewAvatar.statusAFK />}
        {status === "Offline" && <NewAvatar.statusOffline />}
        {status === "DND" && <NewAvatar.statusDND />}
      </NewAvatar.Mask>
      <NewAvatar.Image image={image} />
      <NewAvatar.Status status={status} />
    </NewAvatar>
  );
}
