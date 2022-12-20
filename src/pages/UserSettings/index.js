import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../reducers/state_reducer";
import { default as NewUserSettings } from "../../components/UserSettings";

export default function UserSettings() {
  const {
    state: { userSettings },
    dispatch,
  } = useStateValue();

  const updateSettings = (actions) => {
    dispatch({
      type: actionTypes.UPDATE_SETTINGS,
      ...actions,
    });
  };

  return userSettings.enableSettings ? (
    <NewUserSettings>
      <div onClick={() => updateSettings({ enableSettings: false })}>
        Settings
      </div>
    </NewUserSettings>
  ) : (
    <></>
  );
}
