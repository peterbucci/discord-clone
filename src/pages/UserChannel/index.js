import { Navigate, useParams } from "react-router-dom";
import Channel from "../../components/Channel";
import { useStateValue } from "../../providers/StateProvider";

export default function UserChannel() {
  const {
    state: { channels },
  } = useStateValue();
  const params = useParams();
  const channel = channels[params.channelId];
  return channel ? (
    <Channel>{channel.name}</Channel>
  ) : (
    <Navigate replace to="/channels/@me" />
  );
}
