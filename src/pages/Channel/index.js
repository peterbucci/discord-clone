import { Navigate, useParams } from "react-router-dom";
import { default as NewChannel } from "../../components/Channel";
import { useStateValue } from "../../providers/StateProvider";

export default function Channel() {
  const {
    state: { channels },
  } = useStateValue();
  const params = useParams();
  const channel = channels[params.channelId];
  return channel ? (
    <NewChannel>{channel.name}</NewChannel>
  ) : (
    <Navigate replace to="/channels/@me" />
  );
}
