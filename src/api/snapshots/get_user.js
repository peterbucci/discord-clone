import { collection, query, where, onSnapshot } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db, auth } from "firebase.js";
import createDoc from "helpers/create_doc";
import randomIntFromInterval from "helpers/random_int_from_interval";

export default function getUserSnapshot(dispatch, uid) {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    if (querySnapshot.empty) {
      const user = auth.currentUser;
      const data = {
        uid,
        name: user.displayName.split(" ")[0],
        signUp: new Date(),
        status: "Online",
        tag: randomIntFromInterval(1000, 9999),
        email: user.email,
      };
      createDoc(["users"], data);
    } else {
      querySnapshot.forEach((doc) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: doc.id,
        });
        dispatch({
          type: actionTypes.SET_USERS,
          users: [doc.data()],
        });
      });
    }
  });

  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      user: snapshot,
    },
  });
}
