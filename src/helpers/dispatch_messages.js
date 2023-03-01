import { actionTypes } from "reducers/state_reducer";

export default function dispatchMessages(conversationId, snapshot, dispatch) {
  const messages = snapshot.docs.map((doc) => doc.data());
  dispatch({
    type: actionTypes.SET_MESSAGES,
    id: conversationId,
    messages: messages,
  });
}
